import styles from '../../styles/components/HomeHead.module.css'

export default function Header() {
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
       <div className={styles.bottomBar}></div>
      </nav>
    )
  }
