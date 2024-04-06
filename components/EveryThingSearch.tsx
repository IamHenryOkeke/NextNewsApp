'use client'

import React from 'react'

import { useDebouncedCallback } from 'use-debounce'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export default function EveryThingSearch() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleInputSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('q', term)
    } else {
      params.delete('q')
    }
    router.replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className='my-3 flex justify-between'>
      <div className='relative w-1/2 lg:w-1/5'>
        <input
          type="text"
          onChange={(e) => {
            handleInputSearch(e.target.value)
          }}
          defaultValue={searchParams.get('q')?.toString()} placeholder='Search.....' className='h-10 lg:h-12 w-full pl-7 pr-2 lg:px-10 text-justify text-slate-500 lg:text-lg font-medium focus:outline-none border border-slate-500 rounded-xl'
        />
      </div>
    </div>
  )
}