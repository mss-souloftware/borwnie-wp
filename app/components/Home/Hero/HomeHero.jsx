import Image from 'next/image'
import React from 'react'
import Waves from '../../Global/waves'
import ButtonPrimary from '../../Global/ButtonPrimary'
import styles from './Hero.module.css'
import Link from 'next/link'

export default function HomeHero() {
  return (
    <section className={`${styles.homeHero} relative bg-[#FADB67]`}>
      <Waves bg="#FCFCB2" />
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className='w-3/5'>
            <h1 className='font-magilio text-[#FDF8DE]'>¡Crea Tu Brownie Personalizado!</h1>
            <p className='font-itim text-white text-2xl my-8'>
              Aprovecha esta ocasión de crear tu propia caja de BROWNIES personalizados con frases en chocolate.  Exprésate de esta dulce, exclusiva y original manera y ¡¡deleita  sin limite!!
            </p>
            <div className="mt-10">
              <ButtonPrimary />
              <Link className='font-itim text-2xl text-white ml-6 transition-all hover:text-[#F5B97A]' href="/">Visita la tienda</Link>
            </div>
          </div>
          <div className='w-2/5'>
            <Image src="/images/global/extra/hero.png" alt='¡CREA TU BROWNIE PERSONALIZADO!' width={1000} height={800} />
          </div>
        </div>
      </div>
    </section>
  )
}
