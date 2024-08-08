import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <Link href="/">
            <Image src="/images/global/logo.png" width={100} height={100} alt="Crea Tu Brownie" />
        </Link>
    )
}
