import React, { Suspense } from 'react'
import TopHeadlinSearch from '@/components/TopHeadlinSearch'
import { TopHeadlinesSearchParamsProptypes } from '@/types/types'
import Loading from '../loading'
import Feed from './Feed'

export default async function page({ searchParams }: TopHeadlinesSearchParamsProptypes) {
  return (
    <div>
      <TopHeadlinSearch />
      <Suspense fallback={<Loading/>}>
        <Feed searchParams={searchParams}/>
      </Suspense>
    </div>
  )
}
