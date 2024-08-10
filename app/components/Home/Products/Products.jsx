import React from 'react'
import ProductCard from '../../Global/ProductCard'
import styles from './Products.module.css'

export default function Products() {
    return (
        <section className={`${styles.homeProduct} relative bg-[#FEF8E0]`}>
            <div className="container mx-auto">
                <div className={`${styles.headings} text-center`}>
                    <h2 className='font-magilio'>Nuestros productos</h2>
                    <p className='font-itim'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vero nemo<br></br> repellat vitae beatae voluptatum?</p>
                </div>
                <div className="flex justify-between items-center">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
    )
}
