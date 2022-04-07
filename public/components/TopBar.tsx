import { url } from 'inspector'
import React from 'react'
import styles from '../../styles/TopBar.module.css'

export default class TopBar extends React.Component {
    render() {
        return(
            <div className={styles.container}>

                <div className = {styles.leftContainer}>
                    <div className = {styles.leftIconContainer} >
                        <img className = {styles.leftIcon} src="/earthicon.png" />
                    </div>
                </div>
                <div className = {styles.midContainer}>
                    MidContainer
                </div>
                <div className={styles.rightContainer}>
                    <div className = {styles.navContainer} >
                        About
                    </div>
                    <div className = {styles.navContainer} >
                        Roadmap
                    </div>
                </div>
            </div>
        )
    }
}