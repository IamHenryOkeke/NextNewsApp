import React from 'react'
import Link from 'next/link'

export interface NewsProp {
  author: string,
  description: string,
  publishedAt: string,
  source: {
    id: string,
    name: string
  },
  title: string,
  url: string,
  urlToImage: string
}

export default function ArticleCard({ author, description, publishedAt, title, url, urlToImage, source }: NewsProp) {
  return (
    <div className="flex flex-col gap-3 p-4 text-[14px] md:text-base lg:text-lg bg-slate-200 border border-[#ceb9bf] rounded-md">
      <Link href='' className='text-2xl lg:text-3xl hover:text-blue-600 font-bold' >{title}</Link>
      <p className='text-justify'>{description}</p>
      <p>Author: {author === null ? (<span>Unknown author</span>) : (<span className=''>{author}</span>)}</p>
      <p>Source: {(source.name)}</p>
      <p>Date Published: {(publishedAt).slice(0, 10)}</p>
    </div>
  )
}
