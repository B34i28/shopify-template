import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Hero1 from '@/app/components/assets/hero1.webp'
import Hero2 from '@/app/components/assets/hero2.webp'
import Hproduct1 from '@/app/components/assets/hproduct1.webp'
import Hproduct2 from '@/app/components/assets/hproduct2.webp'
import Hproduct3 from '@/app/components/assets/hproduct3.webp'
import Hproduct4 from '@/app/components/assets/hproduct4.webp'

export default function Hero() {
  return (
    <div className='grid   lg:h-screen'>
      <div className='lg:flex grid space-x-2'>
        <div className='lg:w-1/2'>
            <Image className='absolute' width={600} height={600} src={Hero1} alt='Hero 1' />
            <h1 className='relative lg:mt-72 mb-3 ml-12 text-4xl'>New arrivals</h1>
            <Link className='relative ml-12 hover:text-teal-300' href='/'>Shop Now</Link>
        </div>


        <div className='lg:w-1/2 lg:mt-0 mt-64'>
            <Image className='absolute' width={600} height={600} src={Hero2} alt='hero 2' />
            <h1 className='relative lg:mt-72 mb-3 ml-12 text-4xl'>Best Seller</h1>
            <Link className='relative ml-12 hover:text-teal-300' href='/'>Shop Now</Link>
        </div>
      </div>
      <div className='lg:flex grid grid-cols-1 mt-64 lg:mt-[7rem] space-x-2'>
        {/* 1 */}

        <div>
          <Image className='' width={500} height={500} src={Hproduct1} alt='Hproduct 1' />
          <Link className='text-lg hover:text-teal-300' href='/'>Shop Now</Link>
        </div>
        {/* 2 */}

        <div>
          <Image width={500} height={500} src={Hproduct2} alt='Hproduct 2' />
          <Link className='text-lg hover:text-teal-300' href='/'>Shop Now</Link>
        </div>
        {/* 3 */}

        <div>
          <Image width={500} height={500} src={Hproduct3} alt='Hproduct 3' />
          <Link className='text-lg hover:text-teal-300' href='/'>Shop Now</Link>
        </div>
        {/* 4 */}

        <div>
          <Image width={500} height={500} src={Hproduct4} alt='Hproduct 4' />
          <Link className='text-lg hover:text-teal-300' href='/'>Shop Now</Link>
        </div>


      </div>
    </div>
  )
}