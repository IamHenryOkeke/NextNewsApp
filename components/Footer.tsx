import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Logo from '../app/assets/writedotas.svg'

interface LinksType {
  path: string,
  name: string
}

const footerLinks: LinksType[] = [
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/contact-us',
    name: 'Contact us'
  },
  {
    path: '/terms-and-conditions',
    name: 'Terms and Conditions'
  },
  {
    path: '/privacy-policy',
    name: 'Privacy policy'
  },
  {
    path: '/blogs',
    name: 'Blogs'
  },
  {
    path: '/news',
    name: 'News'
  },
  {
    path: '/community/feeds',
    name: 'Community'
  },
  {
    path: '/become-a-partner',
    name: 'Become a partner'
  }
]

export default function Footer() {
  return (
    <footer className='bg-zinc-900 text-white md:text-lg px-4 md:px-10 lg:px-40 py-16 lg:grid gap-12 grid-cols-2'>
      <div className='mb-5 lg:w-4/5'>
        <div className='flex gap-4 items-end'>
          <Image src={Logo} alt='Logo' className='w-fit' />
          <h2 className='mb-2 font-bold text-2xl lg:text-4xl'>The Whisper</h2>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
      </div>
      <div className='grid gap-14 grid-cols-2'>
        <div>
          <h2 className="font-bold mb-5">Company</h2>
          <div className='flex flex-col gap-4'>
            {
              footerLinks.slice(0, 4).map((item) => <Link key={item.path} href='' className="text-xs md:text-sm w-fit font-medium hover:text-emerald-300"><span>{item.name}</span></Link>)
            }
          </div>
        </div>
        <div>
          <h2 className="font-bold mb-5">Products</h2>
          <div className='flex flex-col gap-4'>
            {
              footerLinks.slice(4, 8).map((item) => <Link key={item.path} href='' className="text-xs md:text-sm w-fit font-medium hover:text-emerald-300"><span>{item.name}</span></Link>)
            }
          </div>
        </div>
      </div>
    </footer>
  )
}