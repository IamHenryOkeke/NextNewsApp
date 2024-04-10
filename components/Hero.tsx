import React from 'react'
import Image from 'next/image'
import HeroImage from '../app/assets/Newspaper.svg'
import { Merriweather } from 'next/font/google'

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Hero() {
  return (
    <div className='py-5 md:py-10 px-8 md:px-10 lg:px-48 flex flex-col md:flex-row gap-10 md:gap-20'>
      <Image src={HeroImage} alt='Hero Image' className='w-full lg:w-fit'/>
      <div className='md:mt-20'>
        <h2 className={`${merriweather.className} text-3xl md:text-7xl font-bold mb-3`}>Get latest news updates</h2>
        <p className='md:text-xl'>Keep on top of popular news and videos from across the country and the world, regularly updated throughout the day</p>
      </div>
    </div>
  )
}
