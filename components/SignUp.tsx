'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Newsletter from '../app/assets/Newsletter.svg'

export default function SignUp() {
  const [mail, setMail] = useState<string>("")
  return (
    <div className='bg-[#4B644A] text-white py-10 md:py-0 lg:py-10 px-4 md:px-10 lg:px-40 flex flex-col md:flex-row items-center'>
      <div className='md:w-3/5'>
        <div className='md:mx-4 mb-4 lg:mb-10'>
          <h2 className='font-bold text-2xl md:text-4xl lg:text-5xl mb-3'>Sign Up for Our Newletters</h2>
          <p className='md:text-lg lg:text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero unde porro amet excepturi, nisi quae nostrum quibusdam nemo corrupti voluptate corporis distinctio, molestiae at! Numquam perferendis cupiditate consequuntur voluptate modi?
          </p>
        </div>
        <form className='md:mx-4 flex flex-col items-center md:flex-row gap-5'
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input value={mail} onChange={(e) => { setMail(e.target.value) }} className='p-3 lg:p-3.5 w-full md:w-3/5 rounded-lg text-black pl-3 lg:text-xl focus:outline-none' type="email" required name="" id="" placeholder='Input your email address here' />
          <button className='bg-[#FF8A00] hover:bg-[#FF8A00]/80 font-bold px-6 py-3 lg:px-10 lg:py-4 self-center rounded-lg' type="submit">Subscribe Now</button>
        </form>
      </div>
      <div className='md:w-2/5'>
        <Image src={Newsletter} alt='' className='w-full h-[400px]'/>
      </div>
    </div>
  )
}
