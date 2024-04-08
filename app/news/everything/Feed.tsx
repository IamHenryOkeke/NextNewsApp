import React from 'react'
import { getData } from '@/api/api'
import Articles from '@/components/Articles'
import { EverythingSearchParamsProptypes } from '@/types/types'

export default async function Feed({searchParams}: EverythingSearchParamsProptypes) {
  const data = await getData(searchParams.q, searchParams.sources)
  return (
    <Articles data={data} />
  )
}
