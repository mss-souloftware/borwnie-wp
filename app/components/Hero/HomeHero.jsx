import Image from 'next/image'
import React from 'react'

export default function HomeHero() {
  return (
    <section className="homeHero h-screen">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className='w-3/5'>
            <h1 className='font-magilio text-8xl text-[#FDF8DE]'>¡CREA TU BROWNIE PERSONALIZADO!</h1>
          </div>
          <div className='w-2/5'>
            <Image className='scale-150' src="/images/global/extra/Default.png.webp" alt='¡CREA TU BROWNIE PERSONALIZADO!' width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}
