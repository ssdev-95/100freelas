
import React from 'react'
import {Button} from '../Button'

import colors from '../../styles/colors.json'
import styles from '../../styles/components/HomeHead.module.css'

export default function Header() {
    const addBtnColor = colors.light.secondary

    return (
      <nav className={styles.navbar}>
        <div className={styles.topBar}>
          <img className={styles.logo} src="images/logo.svg" alt="Logo" />
          <div className={styles.freehours}>
            <img src="images/alert.svg" alt=""/>
            <h2>Voce tem 2 horas livres no seu dia</h2>
          </div>
          <div className={styles.profileContainer}>
            <div>
              <h3>Salomao Souza</h3>
              <h3><a href="#">Ver perfil</a></h3>
            </div>
            <img src="https://github.com/xSallus.png" alt=""/>
          </div>
        </div>
        <hr className={styles.line} />
       <div className={styles.bottomBar}>
         <div className={styles.statsContainer}>
           <div className={styles.stats}>
             <h3>12</h3>
             <h3>Projetos ao total</h3>
           </div>
           <div className={styles.stats}>
             <h3>7</h3>
             <h3>Em andamento</h3>
           </div>
           <div className={styles.stats}>
             <h3>5</h3>
             <h3>Encerrados</h3>
           </div>
         </div>
         <Button bg={addBtnColor} src="images/plus-orange.svg" title="Adicionar novo job" />
       </div>
      </nav>
    )
  }
