import React, { Suspense } from 'react'
import TopHeadlinSearch from '@/components/TopHeadlinSearch'
import { TopHeadlinesSearchParamsProptypes } from '@/types/types'
import { getTopHeadlinesData } from '@/api/api'
import Loading from '../loading'
import Feed from './Feed'

export default async function page({ searchParams }: TopHeadlinesSearchParamsProptypes) {
  const data = await getTopHeadlinesData(searchParams.country, searchParams.category)
  return (
    <div>
      <TopHeadlinSearch />
      <Suspense fallback={<Loading/>}>
        <Feed searchParams={searchParams}/>
      </Suspense>
    </div>
  )
}
