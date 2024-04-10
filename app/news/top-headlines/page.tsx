import React, { Suspense } from 'react'
import { Metadata } from 'next'
import TopHeadlinSearch from '@/components/TopHeadlinSearch'
import { TopHeadlinesSearchParamsProptypes } from '@/types/types'
import Loading from '../loading'
import Feed from './Feed'

export const metadata: Metadata = {
  title: "Top Headlines | The Whisper",
  description: "Breaking news in the world of tech",
};

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
