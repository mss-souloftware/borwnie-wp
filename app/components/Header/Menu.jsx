import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <div className='mainMenu'>
        <ul className='flex items-center justify-center'>
            <li className='mx-2'>
                <Link className='font-itim text-xl' href="/">Tienda</Link>
            </li>
            <li className='mx-2'>
                <Link className='font-itim text-xl' href="/">Crea Tu Brownie</Link>
            </li>
            <li className='mx-2'>
                <Link className='font-itim text-xl' href="/">Mi Cuenta</Link>
            </li>
            <li className='mx-2'>
                <Link className='font-itim text-xl' href="/">Quienes Somos</Link>
            </li>
            <li className='mx-2'>
                <Link className='font-itim text-xl' href="/">Contactanos</Link>
            </li>
            <li className='mx-2'>
                <Link className='font-itim text-xl' href="/">Preguntas Frecuentes</Link>
            </li>
        </ul>
    </div>
  )
}
