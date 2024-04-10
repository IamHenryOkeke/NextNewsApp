'use client'
import NewsDetail from '@/components/NewsDetail'
import { useStore } from '@/store'
import React from 'react'

interface PropTypes {
  params: {
    slug: string
  }
}

export default function Page({ params }: PropTypes) {
  const data = useStore((state) => state.data)
  const newsItem = data.find((item) => item.id == params.slug)
  return (
    <NewsDetail newsItem={newsItem}/>
  )
}
