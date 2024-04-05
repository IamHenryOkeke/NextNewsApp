'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NewsNavBar() {
  const pathName = usePathname()
  return (
    <div className='font-bold lg:text-xl mb-5 lg:mb-10 flex justify-between'>
      <Link href='/news/top-headlines' className={`border-b-4 ${pathName === '/news/top-headlines' ? 'border-emerald-300' : 'border-white'} pb-2 w-full text-center`}>Top Headlines</Link>
      <Link href='/news/everything' className={`border-b-4 ${pathName === '/news/everything' ? 'border-emerald-300' : 'border-white'} pb-2 w-full text-center`}>Everything</Link>
    </div>
  )
}