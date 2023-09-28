import React from 'react'

export default function Footer() {
  return (
    <div className='p-14 text-center lg:text-left border-t-2 space-y-4 border-gray-400 lg:flex grid justify-between space-x-10'>
        <div>
            <h1 className='mt-2 font-semibold text-2xl'>Join Us</h1>
            <p className='mt-1 text-gray-900'>New subscribers receive 10% off their first purchase</p>
            <input
            type='email'
            className='w-96 mt-2 border-collapse border-4'
            placeholder='Entre Your Email' />
        </div>


        <div className=''>
            <h1 className='font-semibold'>INFORMATION</h1>
            <ul className='text-sm text-gray-900 space-y-2 mt-5'>
                <li className='hover:text-cyan-300'>Return Policy</li>
                <li className='hover:text-cyan-300'>Start a Return</li>
                <li className='hover:text-cyan-300'>FAQ</li>
                <li className='hover:text-cyan-300'>Terms and Conditions</li>
                <li className='hover:text-cyan-300'>Privacy Policy</li>
            </ul>
        </div>


        <div>
            <h1 className='font-semibold'>CATEGOIRES</h1>
            <ul className='text-sm text-gray-900 space-y-2 mt-5'>
                <li className='hover:text-cyan-300'>Tops</li>
                <li className='hover:text-cyan-300'>Basics</li>
                <li className='hover:text-cyan-300'>Shirts & Blouses</li>
                <li className='hover:text-cyan-300'>Pants</li>
                <li className='hover:text-cyan-300'>Blazers & Vests</li>
                <li className='hover:text-cyan-300'>Shorts</li>
            </ul>
        </div>


        <div>
            <h1 className='font-semibold'>SERVICES</h1>
            <ul className='text-sm text-gray-900 space-y-2 mt-5'>
                <li className='hover:text-cyan-300'>Sale</li>
                <li className='hover:text-cyan-300'>Quick Ship</li>
                <li className='hover:text-cyan-300'>New Designs</li>
                <li className='hover:text-cyan-300'>Accidental Fabric</li>
                <li className='hover:text-cyan-300'>Protection</li>
                <li className='hover:text-cyan-300'>Furniture Care</li>
                <li className='hover:text-cyan-300'>Gift Cards</li>
            </ul>
        </div>
    </div>
  )
}

