'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function PreviousPageButton () {
  const router = useRouter()

  return (
    <p onClick={() => router.back()} className="mb-5 cursor-pointer inline-block lg:text-lg font-semibold">&lt; Go back</p>
  )
}
