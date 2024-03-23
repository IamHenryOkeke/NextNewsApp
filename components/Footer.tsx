import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
    <footer className='bg-zinc-900 text-white md:text-lg py-5 px-4 md:px-10 lg:px-40 lg:grid gap-12 grid-cols-[0.5fr_1fr]'>
      <div className='my-5'>
        <h2 className='font-bold text-2xllg:my-0'>Tech News</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
      </div>
      <div className='grid gap-14 grid-cols-2 lg:grid-cols-4'>
        <div>
          <h2 className="font-bold mb-5">Company</h2>
          <div className='flex flex-col gap-4'>
            {
              footerLinks.slice(0, 4).map((item) => <Link key={item.path} href='' className="text-xs md:text-sm lg:text-xs w-fit font-medium hover:text-emerald-300"><span>{item.name}</span></Link>)
            }
          </div>
        </div>
        <div>
          <h2 className="font-bold mb-5">Products</h2>
          <div className='flex flex-col gap-4'>
            {
              footerLinks.slice(4, 8).map((item) => <Link key={item.path} href='' className="text-xs md:text-sm lg:text-xs w-fit font-medium hover:text-emerald-300"><span>{item.name}</span></Link>)
            }
          </div>
        </div>
      </div>
    </footer>
  )
}