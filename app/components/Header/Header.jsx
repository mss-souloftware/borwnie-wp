import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Cart from './Cart'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className="container mx-auto">
      <header className={`${styles.mainHeader} py-2 px-5`}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Logo />
            <Menu />
            <Cart />
          </div>
        </div>
      </header>
    </div>
  )
}
