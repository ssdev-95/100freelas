import React from 'react'
import Link from 'next/link'

import styles from '../../styles/components/ProfileHeader.module.css'

export default function Header() {
	return (
		<div className={styles.pageHeader}>
			<div className={styles.container}>
				<Link href="/">
					<img className={styles.arrow} src="images/back.svg" alt="" />
				</Link>
				<h1>My Profile</h1>
			</div>
		</div>
	)
}