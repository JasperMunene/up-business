import { Button } from '@/components/ui/button'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';


function Hero() {
  return (
   <section className='flex'>
    <div className='pl-20 py-24'>
        <h1 className='text-6xl font-bold py-6 text-[#7C76BB]'>How to <span className='text-[#FF87B0]'>level up</span> <br></br> your business</h1>
        <p className='py-6'>Pariatur aliqua sunt pariatur nisi aliqua eiusmod officia consequat reprehenderit.</p>
        <div className='flex gap-5'>
            <Button>How we work</Button>
            <Button variant="outline" className="text-[#7C76BB] py-3">Lets talk  <FaArrowRight className='pl-2' /></Button>
        </div>
    </div>
    <div>
        <Image 
            src='/build your business.png'
            alt="Landscape picture"
            width={800}
            height={500}
        />
    </div>
    <div></div>
   </section>
  )
}

export default Hero