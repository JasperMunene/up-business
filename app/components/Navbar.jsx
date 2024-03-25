import React from 'react'
import { FaArrowUp } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from "@/components/ui/button"




function Navbar() {
  return (
   <nav className='w-full pl-8 pr-10 pt-3 flex justify-between items-center'>
   <Link href="/" className='inline-block'>
        <h2 className='flex gap-1 text-lg py-2 m-4 align-middle'>
            <FaArrowUp className='text-[#FF87B0]' />
            <span className='text-[#7C76BB] px-1 font-bold'>UP BUSINESS</span>
        </h2>
    </Link>
   <div className='flex gap-7  items-center'>
    <ul className="flex list-none gap-5 text-lg">
        <li>
            <a className='inline-block px-3 py-4 no-underline outline-none hover:no-underline text-[#7C76BB] hover:text-[#FF87B0]' href='#'>Home</a>
        </li>
        <li>
            <a className='inline-block px-3 py-4 no-underline outline-none hover:no-underline text-[#7c76bb] hover:text-[#FF87B0]' href='#'>How we work</a>
        </li>
        <li>
            <a className='inline-block px-3 py-4 no-underline outline-none hover:no-underline text-[#7C76BB] hover:text-[#FF87B0]' href='#'>Our Team</a>
        </li>
        <li>
            <a className='inline-block px-3 py-4 no-underline outline-none hover:no-underline text-[#7C76BB] hover:text-[#FF87B0]' href='#'>Pricing</a>
        </li>
       
       </ul>
    <Button>Book a call</Button>
    </div>
   
   </nav>
  )
}

export default Navbar