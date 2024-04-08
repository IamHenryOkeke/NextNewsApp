import React, { Suspense } from 'react'
import EveryThingSearch from '@/components/EveryThingSearch'
import { EverythingSearchParamsProptypes } from '@/types/types'
import Feed from './Feed'
import Loading from '../loading'

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
