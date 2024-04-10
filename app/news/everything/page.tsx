import React, { Suspense } from 'react'
import { Metadata } from 'next';
import EveryThingSearch from '@/components/EveryThingSearch'
import { EverythingSearchParamsProptypes } from '@/types/types'
import Feed from './Feed'
import Loading from '../loading'

export const metadata: Metadata = {
  title: "Everything | The Whisper",
  description: "Breaking news in the world of tech",
};

export default async function page({ searchParams }: EverythingSearchParamsProptypes) {
  return (
    <div>
      <EveryThingSearch />
      <Suspense fallback={<Loading/>}>
        <Feed searchParams={searchParams}/>
      </Suspense>
    </div>
  )
}
