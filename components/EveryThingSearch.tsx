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
    <div className='my-3 w-full md:w-1/2'>
      <input
        type="text"
        onChange={(e) => {
          handleInputSearch(e.target.value)
        }}
        defaultValue={searchParams.get('q')?.toString()} placeholder='Search related article e.g Tech .....' className='w-full px-5 py-3 text-justify lg:text-lg font-medium focus:outline-none border border-slate-500 rounded-xl'
      />
    </div>
  )
}