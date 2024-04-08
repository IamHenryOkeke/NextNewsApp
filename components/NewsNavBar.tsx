'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NewsNavBar() {
  const pathName = usePathname()
  return (
    <div className='font-bold lg:text-xl my-5 lg:mb-10 flex gap-5 justify-between'>
      <Link href='/news/top-headlines?country=ng' className={`border-b-4 ${pathName.includes('/news/top-headlines') ? 'border-emerald-300' : 'border-white'} pb-2 w-full text-center`}>Top Headlines</Link>
      <Link href='/news/everything' className={`border-b-4 ${pathName.includes('/news/everything') ? 'border-emerald-300' : 'border-white'} pb-2 w-full text-center`}>Everything</Link>
    </div>
  )
}
