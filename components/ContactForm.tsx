'use client'

import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';

export default function ContactForm() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  return (
    <div className='flex flex-col items-center mx-3'>
      <h1 className='text-2xl md:text-4xl mb-5'>Get in touch</h1>
      <p className='text-xl md:text-2xl mb-2'>My Socials</p>
      <div className='flex gap-8 mb-5'>
        <a href="https://twitter.com/NmesomaHenry">
          <FaTwitter className='hover:text-blue-500' size={25}/>
        </a>
        <a href="https://github.com/IamHenryOkeke">
          <FaGithub size={25}/>
        </a>
        <a href="https://www.linkedin.com/in/henry-okeke-nmesomachukwu/">
          <FaLinkedin className='hover:text-blue-500' size={25}/>
        </a>
        <a href="tel:+2347080194374">
          <FaPhone className='hover:text-green-500' size={24}/>
        </a>
      </div>
      <div className='flex flex-col gap-4 w-full md:w-[60%]'>
        <h1 className='text-xl md:text-2xl -mb-3'>Send a mail</h1>
        <label>
          Message Subject:
        </label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className='border-2 border-black rounded-md p-2'
        />

        <label>Your message</label>
        <textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="p-2 border-2 border-black text-gray-900 bg-gray-50 resize-none rounded-md" placeholder="Write your message here..."></textarea>
        <a href={`mailto:iamhenryokeke@gmail.com?subject=${subject}&body=${message}`}>
          <button className='px-4 py-1 bg-slate-400 border rounded-md'>Click to Send an Email</button>
        </a>
      </div>
    </div>
  )
}
