import React from 'react'
import { Metadata } from 'next'
import { Merriweather } from 'next/font/google'

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "About Us | The Whisper",
  description: "Breaking news in the world of tech",
};

export default function page() {
  return (
    <main className='lg:mx-52 py-5 px-4 md:px-10 lg:px-52'>
      <h1 className={`${merriweather.className} text-2xl font-bold mt-5`}>About us</h1>
      <div className='space-y-4'>
        <p>
          Welcome to our news app, your go-to destination for staying informed and up-to-date with the latest happenings around the globe.
        </p>
        <div>
          <p>With our innovative features like getting updates from:</p>
          <ul className='list-disc ml-7'>
            <li>Specific country</li>
            <li>Particular category</li>
            <li>Based on keywords</li>
          </ul>
        </div>
      </div>
      <p>
        navigating the vast landscape of news has never been easier.
      </p>
    </main>
  )
}
