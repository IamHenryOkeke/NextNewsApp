'use client'

import Link from 'next/link';
import React, { useState } from 'react'

interface LinksType {
  path: string,
  name: string
}

const navLinks: LinksType[] = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/category',
    name: 'Category'
  },
  {
    path: '/contact',
    name: 'Contact'
  }
]

export default function Navbar() {
  const [navbar, setNavbar] = useState<boolean>(false);
  return (
    <nav className='py-5 px-4 md:px-10 lg:px-40 flex justify-between items-center'>
      <h2 className='font-bold text-xl'>
        TechNews
      </h2>
      <div className='flex gap-4'>
        {
          navLinks.map((item) => (
            <Link className='hover:text-black/50' key={item.path} href={item.path}>{item.name}</Link>
          ))
        }
      </div>
    </nav>
  )
}
