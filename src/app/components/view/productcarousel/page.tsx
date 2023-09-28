import Image from 'next/image'
import React from 'react'
import Product1 from '@/app/components/assets/product1.webp'
import Product2 from '@/app/components/assets/product2.webp'
import Product3 from '@/app/components/assets/product3.webp'
import Product4 from '@/app/components/assets/product4.webp'
import Product5 from '@/app/components/assets/product5.webp'
import Product6 from '@/app/components/assets/product6.webp'
import Product7 from '@/app/components/assets/product7.webp'
import Product8 from '@/app/components/assets/product8.webp'


export default function ProductCarousel() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 space-x-2'>
        {/* 1 */}

        <div className=''>
            <Image width={500} height={500} src={Product1} alt='product 1' />
            <h1 className='text-xl'>$100</h1>
            <p>Shirts</p>
        </div>
        {/* 2 */}

        <div className=''>
            <Image width={500} height={500} src={Product2} alt='Product 2' />
            <h1 className='text-xl mt-3'>$150</h1>
            <p>Shirts</p>
        </div>
        {/* 3 */}

        <div className=''>
            <Image width={500} height={500} src={Product3} alt='Product 3' />
            <h1 className='text-xl mt-3'>$300</h1>
            <p>Shirts</p>
        </div>
        {/* 4 */}

        <div className=''>
            <Image width={500} height={500} src={Product4} alt='Product 4' />
            <h1 className='text-xl mt-3'>$75</h1>
            <p>Shirts</p>
        </div>
        {/* 5 */}

        <div className=''>
            <Image width={500} height={500} src={Product5} alt='product 5' />
            <h1 className='text-xl'>$100</h1>
            <p>Shirts</p>
        </div>
        {/* 6 */}

        <div className=''>
            <Image width={500} height={500} src={Product6} alt='product 6' />
            <h1 className='text-xl'>$150</h1>
            <p>Shirts</p>
        </div>
        {/* 7 */}

        <div className=''>
            <Image width={500} height={500} src={Product7} alt='product 7' />
            <h1 className='text-xl'>$300</h1>
            <p>Shirts</p>
        </div>
        {/* 8 */}

        <div className=''>
            <Image width={500} height={500} src={Product8} alt='product 8' />
            <h1 className='text-xl'>$250</h1>
            <p>Shirts</p>
        </div>
    </div>
  )
}

