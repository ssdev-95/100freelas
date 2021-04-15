import React, { useContext } from 'react'
import Link from 'next/link'

import Slider from '../Slider'

import { SliderContext } from '../../contexts/SliderContext'

import colors from '../../styles/colors.json'
import styles from '../../styles/components/ProfileHeader.module.css'

export default function Header() {
	const { theme } = useContext(SliderContext)

	const head = theme === 'light' ? colors.light['primary'] : colors.dark['primary']

	return (
		<div className={styles.pageHeader}
		     style={{background: head}}>
			<div className={styles.container}>
				<Link href="/">
					<img className={styles.arrow} src="images/back.svg" alt="" />
				</Link>
				<h1>My Profile</h1>
			</div>
			<Slider />
		</div>
	)
}