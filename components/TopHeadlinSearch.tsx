'use client'

import React from 'react'

import { useDebouncedCallback } from 'use-debounce'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export default function TopHeadlinSearch() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleCountrySearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('country', term)
    } else {
      params.delete('country')
    }
    router.replace(`${pathname}?${params.toString()}`)
  }, 300)

  const handleCategorySearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('category', term)
    } else {
      params.delete('category')
    }
    router.replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className='my-3 flex justify-between'>
      <div className='flex flex-col md:flex-row items-center gap-3'>
        <label htmlFor="countries" className="font-medium">Select a country</label>
        <select defaultValue={searchParams.get('country')?.toString()} onChange={(e) => { handleCountrySearch(e.target.value) }} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="us">United States</option>
          <option value="ng">Nigeria</option>
          <option value="fr">France</option>
          <option value="gb">United Kingdom</option>
        </select>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-3'>
        <label htmlFor="countries" className="font-medium">Select a category</label>
        <select defaultValue={searchParams.get('category')?.toString()} onChange={(e) => { handleCategorySearch(e.target.value) }} id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option disabled selected value="">Select a category</option>
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </div>
    </div>
  )
}