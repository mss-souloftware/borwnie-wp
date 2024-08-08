import React from 'react'
import styles from "./waves.module.css"

export default function Waves({ bg }) {
    return (
        <div className={styles.mainClipath} style={{background: bg}}></div >
    )
}
