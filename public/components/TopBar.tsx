import { url } from 'inspector'
import React from 'react'
import styles from '../../styles/TopBar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function TopBar() {

        const router = useRouter();

        return(
                <div className={styles.topBarContainer}>
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
                        - Save The World NFT -
                    </div>
                    <div className={styles.rightContainer}>
                        <Link href="/about">
                            <a>
                                <div className = {router.pathname == "/about" ? styles.navContainerActive : styles.navContainer} >
                                    <p> About </p>
                                </div>
                            </a>
                        </Link>
                        <Link href="/roadmap">
                            <a>
                                <div className = {router.pathname == "/roadmap" ? styles.navContainerActive : styles.navContainer} >
                                    Roadmap
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
        )
}