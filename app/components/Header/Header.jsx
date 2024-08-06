import React from 'react'
import Logo from './Logo'

export default function Header() {
  return (
    <header>
        <div className="container mx-auto">
            <div className="flex">
                <Logo />
            </div>
        </div>
    </header>
  )
}
