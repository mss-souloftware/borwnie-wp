import React from 'react'
import styles from './SiteFeatures.module.css'
import Image from 'next/image'

const featureData = [
    {
        image: "/images/icons/world.svg",
        title: "Envíos a nivel peninsular y Unión Europea",
        desc: "Contamos con el trabajo conjunto con las mejores empresas en envíos nacionales e internacionales de 24h a 72h días laborales."
    },
    {
        image: "/images/icons/world.svg",
        title: "Mejores ofertas",
        desc: "Cada mes sacamos las mejores ofertas para nuestros clientes, infórmate y no pierdas la oportunidad."
    },
    {
        image: "/images/icons/world.svg",
        title: "Seguridad de Pagos",
        desc: "Puedes tener total seguridad a la hora de efectuar tus pagos en nuestra web."
    }
]

export default function SiteFeatures() {
    return (
        <section className={`${styles.siteFeature} sectionTop bg-[#FCFCB2]`}>
            <div className="container mx-auto">
                <div className="flex justify-between">
                    {featureData.map((feature, index) => (
                        <div key={index} className={`${styles.innerBox} w-4/12 mx-3`}>
                            <Image src={feature.image} height={70} width={70} alt="" />
                            <h2 className='font-itim'>{feature.title}</h2>
                            <p>
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
