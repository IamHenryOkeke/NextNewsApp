import React from 'react'
import { NewsProp } from '@/types/types'
import Image from 'next/image'
import NoImage from '../app/assets/Broken-image.png'

import { Merriweather } from 'next/font/google'

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})
interface NewsItemProp {
  newsItem : NewsProp | undefined
}

export default function NewsDetail({ newsItem }: NewsItemProp) {
  return (
    <div className='space-y-4'>
      <h2 className={`${merriweather.className} text-xl md:text-2xl font-bold`}>{newsItem?.title}</h2>
      <span>Published date: {newsItem?.publishedAt.slice(0, 10)}</span>
      {newsItem?.urlToImage ? <img className='rounded-lg' src={newsItem?.urlToImage} alt="news image" /> : <Image src={NoImage} alt='No image' className='mx-auto md:h-96'/>}
      <h3 className='text-sm md:text-lg font-bold'>By {newsItem?.author ? newsItem?.author : "No author"}</h3>
      <span>Source: {newsItem?.source.name}</span>
      <p>{newsItem?.description}</p>
      <a className='underline hover:text-emerald-300 hover:no-underline' href={newsItem?.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  )
}
