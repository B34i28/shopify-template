import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '@/app/components/assets/logop.png'
import { NavbarArray, NavbarItemType } from '../../utils/NavbarArrayAndType'
import {BsCart3} from 'react-icons/bs'

export default function Navbar() {
  return (
    <div className='flex py-4 px-2 items-center justify-between'>
        {/* Left Side */}

        <div className='mb-5 hidden lg:block'>
            <Link href="/">
                <Image width={100} height={70} src={Logo} alt='Logo' />
            </Link>
        </div>

        {/* Middle */}

        <div className='ml-10 text-sm lg:font-medium'>
            <ul className='flex space-x-4 lg:space-x-7'>
                {NavbarArray.map((item:NavbarItemType,index:number)=>(
                    <li key={index}>
                        <Link href={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </div>

        {/* Right Side */}
        <div className='hidden lg:block'>
            <input
            placeholder='Search Product here'
            type='text'
            className='pl-3 pr-4 w-96 border-4 border-gray-400 rounded-md' 
            />
        </div>
        {/* Add to cart */}
        <div className='hidden lg:block'>
            <BsCart3 size={27} />
        </div>
    </div>
  )
}
