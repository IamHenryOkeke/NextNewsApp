import React from 'react'
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Contact Us | The Whisper",
  description: "Breaking news in the world of tech",
};

export default function page() {
  return (
    <main className='lg:mx-52 py-5 px-4 md:px-10 lg:px-52'>
      <ContactForm/>
    </main>
  )
}
