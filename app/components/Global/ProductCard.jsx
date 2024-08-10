import Image from 'next/image'
import React from 'react'
import styles from './ProductCard.module.css'

export default function ProductCard() {
    return (
        <div className={`${styles.mainCard} w-3/12 mx-4`}>
            <div className="productThumnail">
                <Image src="/images/global/extra/product.jpg" alt='product' width={400} height={400} />
            </div>
            <div className={`${styles.productData}`}>
                <h3 className='font-itim'>Product Title Here</h3>
                <div className={`${styles.price} font-itim`}>
                    29,99 €
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className={`${styles.primaryBtn}`}>
                        Añadir al carrito
                    </div>
                    <div className={`${styles.secondaryBtn}`}>
                        Comprar Ahora
                    </div>
                </div>
            </div>
        </div>
    )
}
