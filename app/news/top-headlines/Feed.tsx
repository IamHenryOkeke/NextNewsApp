import React from 'react'
import { getData } from '@/api/api'
import Articles from '@/components/Articles'
import { TopHeadlinesSearchParamsProptypes } from '@/types/types'

export default async function Feed({searchParams}: TopHeadlinesSearchParamsProptypes) {
  const data = await getData(searchParams.country, searchParams.category)
  return (
    <Articles data={data} />
  )
}
