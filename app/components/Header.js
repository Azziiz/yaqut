'use client'
import Image from 'next/image'
import { FaShoppingCart } from "react-icons/fa";
import { UserButton } from "@clerk/nextjs";
import useCartStore from '../cartStore';
import Link from 'next/link';
import { FaTruck } from "react-icons/fa6";

function header() {
  const totalItems = useCartStore(state => state.totalItems)
  return (
    <div className='p-4 border-b-2 border-[#E8DFFF]'>
        <div className='max-w-7xl mx-auto flex justify-between'>
            <Link href='/'>
              <div className='flex items-center'>
                  <Image src='/logo.png' width={50} height={50} alt='logo'/>
                  <h1 className='m1-2 text-2xl lg:text-3xl font-bold'>YAQUT</h1>
              </div>
            </Link>
            <div className='flex items-center relative'>
                <Link href='/cart'>
                  <FaShoppingCart  className='text-3xl text-[#A394FF] cursor-pointer'/>
                </Link>
                {totalItems > 0 && (
                  <div className='ml-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-sm font-semibold '>{totalItems}</div>
                )}
                <Link href='/order'>
                  <FaTruck  className='ml-4 text-3xl text-[#A394FF] cursor-pointer'/>
                </Link>                
                <div className='ml-4'>
                  <UserButton afterSignOutUrl="/" className='ml-4'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default header