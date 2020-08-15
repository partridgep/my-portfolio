import React from 'react'

import { Link } from 'gatsby'

import styles from './Header.module.scss'

export default function Header({ title }) {
    return(
        <header className={styles.Header}>
            <h1>{title}</h1>
            <nav>
                <Link to="/about" >About</Link>
                <Link to="/" >Home</Link>
            </nav>
        </header>
    )
}