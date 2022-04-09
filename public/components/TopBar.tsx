import { url } from 'inspector'
import React from 'react'
import styles from '../../styles/TopBar.module.css'
import Link from 'next/link'

export default class TopBar extends React.Component {
    render() {
        return(
            <div className={styles.container}>

                <div className = {styles.leftContainer}>
                    <div className = {styles.leftIconContainer} >
                        <Link href="/">
                            <a>
                                <img className = {styles.leftIcon} src="/earthicon.png" />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className = {styles.midContainer}>
                    MidContainer
                </div>
                <div className={styles.rightContainer}>
                    <div className = {styles.navContainer} >
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </div>
                    <div className = {styles.navContainer} >
                    <Link href="/roadmap">
                            <a>Roadmap</a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}