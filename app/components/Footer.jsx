import React from 'react'
import Link from 'next/link'
import { FaArrowUp, FaFacebook } from 'react-icons/fa';
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
   <footer className='flex justify-around bg-[#F6FBFF]'>
      <div>
        <Link href="/" className='inline-block'>
            <h2 className='flex gap-1 text-lg py-2 m-4 align-middle'>
                <FaArrowUp className='text-[#FF87B0]' />
                <span className='text-[#7C76BB] px-1 font-bold'>UP BUSINESS</span>
            </h2>
        </Link>
        <p className='text-balance'>
        Tempor ullamco reprehenderit deserunt fugiat pariatur est sunt.
        </p>

        <div className="my-12 flex items-center gap-5">

              <Link
                  href='#'
                  target='_blank'
                  className="transition-all text-pink-500 hover:scale-125 duration-300"
                >
                  <BsGithub size={20} />
                </Link>
                <Link
                  href='#'
                  target='_blank'
                  className="transition-all text-pink-500 hover:scale-125 duration-300"
                >
                  <BsLinkedin size={20} />
                </Link>
                <Link
                  href='#'
                  target='_blank'
                  className="transition-all text-pink-500 hover:scale-125 duration-300"
                >
                  <FaFacebook size={20} />
                </Link>
          </div>
      </div>
      <div>
        <h3 className='text-lg font-bold'>About Us</h3>
        <ul>
          <li><a>Home</a></li>
          <li><a>How we work</a></li>
          <li><a>Our team</a></li>
          <li><a>Pricing</a></li>
          <li><a>Legal</a></li>
        </ul>
      </div>
   </footer>
  )
}

export default Footer