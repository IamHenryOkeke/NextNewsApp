import React from 'react'
import { NewsProp } from '@/types/types'

interface NewsItemProp {
  newsItem : NewsProp | undefined
}

export default function NewsDetail({ newsItem }: NewsItemProp) {
  return (
    <div className='space-y-4'>
      <img className='rounded-lg' src={newsItem?.urlToImage} alt="news image" />
      <h2 className='text-xl md:text-2xl font-bold'>{newsItem?.title}</h2>
      <span>Published date: {newsItem?.publishedAt.slice(0, 10)}</span>
      <h3 className='text-lg font-semibold'>Author: {newsItem?.author}</h3>
      <span>Source: {newsItem?.source.name}</span>
      <p>{newsItem?.description}</p>
      <a className='underline hover:text-emerald-300 hover:no-underline' href={newsItem?.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  )
}
