import React from 'react'

import Header from '../../components/ProfileHeader'

import styles from '../../styles/pages/Profile.module.css'

export default function Profile() {
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.content}>
				<div className={styles.left}>
					<div>
						<img className={styles.avatar} src="https://github.com/xSallus.png" alt=""/>
						<h1 className={styles.avatarTitle}>Salomao Souza</h1>
					</div>
					<div className={styles.pricing}>
						<span>Your hour pricing is</span>
						<span>$ 75,00 dolars</span>
					</div>
					<div className={styles.button}>
						<span>Save data</span>
					</div>
				</div>
				<div className={styles.right}>
					<h1 className={styles.title}>Profile data</h1>
					<div className={styles.topperInput}>
						<input type="text" placeholder="Name"/>
						<input  type="text" placeholder="Avatar url"/>
					</div>
					<h1 className={styles.title}>Planning</h1>
					<div className={styles.lowerInput}></div>
				</div>
    		</div>
		</div>
	)
}
