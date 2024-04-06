'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdClose } from 'react-icons/md'
import Image from 'next/image';
import Logo from '../app/assets/writedotas.svg'

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
    path: '/news/top-headlines?country=ng',
    name: 'News'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/contact',
    name: 'Contact'
  }
]

export default function Navbar() {
  const [navbar, setNavbar] = useState<boolean>(false);

  const toggleMenu = () => {
    setNavbar(!navbar)
  }

  return (
    <nav className='py-5 lg:py-8  px-4 md:px-10 lg:px-40 flex justify-between items-center'>
      <Link href="/" className='flex items-center gap-2'>
        <Image src={Logo} alt='Logo' className='h-10 w-fit'/>
        <h2 className='font-bold text-xl mt-2'>
          The Whisper
        </h2>
      </Link>
      <div className='hidden md:flex gap-4 lg:gap-10 lg:text-lg'>
        {
          navLinks.map((item) => (
            <Link className='hover:text-emerald-300' key={item.path} href={item.path}>{item.name}</Link>
          ))
        }
      </div>
      <div className='cursor-pointer md:hidden'>
        {
          navbar ? <MdClose onClick={toggleMenu} size={30} /> : <RxHamburgerMenu onClick={toggleMenu} size={30} />
        }
      </div>
      <div className={`h-screen w-screen pt-40 lg:hidden text-lg font-bold bg-neutral-950 text-white transition-all ease-in-out origin-top-right absolute z-50 right-0 top-16 flex flex-col items-center gap-5 ${navbar ? 'opacity-100 scale-x-100 translate-x-0' : 'opacity-0 scale-x-0 translate-x-40'} duration-500`}>
        {
          navLinks.map((item) => (
            <Link className='hover:text-white/50' onClick={toggleMenu} key={item.path} href={item.path}>{item.name}</Link>
          ))
        }
      </div>
    </nav>
  )
}
