import React from 'react'
import Link from 'next/link'
import { NewsProp } from '@/types/types'
import { usePathname } from 'next/navigation'

export default function ArticleCard({ id, author, description, publishedAt, title, url, urlToImage, source }: NewsProp) {
  const pathName = usePathname()
  console.log(id)
  console.log(pathName)
  return (
    <div className="flex flex-col gap-3 p-4 text-[14px] md:text-base lg:text-lg bg-slate-200 border border-[#ceb9bf] rounded-md">
      <Link href={`${pathName}/${id}`} className='text-xl md:text-2xl lg:text-3xl hover:text-blue-600 font-bold' >{title}</Link>
      <p className='text-justify'>{description}</p>
      <p>Author: {!author ? (<span>Unknown author</span>) : (<span className=''>{author}</span>)}</p>
      <p>Source: {(source.name)}</p>
      <p>Date Published: {(publishedAt).slice(0, 10)}</p>
    </div>
  )
}
