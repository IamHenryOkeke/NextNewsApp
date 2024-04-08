import React from 'react'
import NewsNavBar from '@/components/NewsNavBar'
import PreviousPageButton from '@/components/PreviousPageButton'

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='lg:mx-52 py-5 px-4 md:px-10 lg:px-52'>
      <PreviousPageButton />
      <NewsNavBar />
      {children}
    </main>
  )
}
