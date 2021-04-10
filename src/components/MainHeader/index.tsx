
import React from 'react'

import styles from '../../styles/components/HomeHead.module.css'

export default function Header() {

    return (
      <nav className={styles.navbar}>
        <div className={styles.topBar}>
          <img className={styles.logo} src="images/logo.svg" alt="Logo" />
          <div className={styles.freehours}>
            <img src="images/alert.svg" alt=""/>
            <h2>Have 2 hours left in your working day</h2>
          </div>
          <div className={styles.profileContainer}>
            <div>
              <h3>Salomao Souza</h3>
              <h3><a href="#">See profile</a></h3>
            </div>
            <div className={styles.avatarContainer}>
              <img src="https://github.com/xSallus.png" alt=""/>
            </div>
          </div>
        </div>
        <hr className={styles.line} />
       <div className={styles.bottomBar}>
         <div className={styles.statsContainer}>
           <div className={styles.stats}>
             <h3>12</h3>
             <h3>Job so far</h3>
           </div>
           <div className={styles.stats}>
             <h3>7</h3>
             <h3>Currently</h3>
           </div>
           <div className={styles.stats}>
             <h3>5</h3>
             <h3>Done</h3>
           </div>
         </div>
         <div className="button">
            <img src="images/plus-orange.svg"/>
            <p>Add new job</p>
         </div>
       </div>
      </nav>
    )
  }
