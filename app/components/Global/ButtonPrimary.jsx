import Link from 'next/link'
import React from 'react'
import styles from './ButtonPrimary.module.css'

export default function ButtonPrimary() {
  return (
    <Link className={`${styles.pButton}`} href="/">
      <span className='font-itim'>
        !CREAR MI FRASE!
      </span>
      <div className="indicator"></div>
    </Link>
  )
}
