import React from 'react'
import styles from './Button.module.css'

export default function Button(props) {
    const {label} = props 
    return (
        <div>
            <button className={styles.btn}>{label}</button>
        </div>
    )
}
