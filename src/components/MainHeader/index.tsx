import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'

import { Utils } from '../../utils/FreelaUtils'

import { CreateContext } from '../../contexts/CreateContext'
import { FreelasContext } from '../../contexts/Freelas'
import { ProfileContext } from '../../contexts/Profile'

import { SliderContext } from '../../contexts/SliderContext'

import colors from '../../styles/colors.json'

import styles from '../../styles/components/HomeHead.module.css'

export default function Header() {
	const { theme } = useContext(SliderContext)

	const head = theme === 'light' ? colors.light['primary'] : colors.dark['primary']

	const { openCreateModal } = useContext(CreateContext)

	const { freelas } = useContext(FreelasContext)

	const { profile } = useContext(ProfileContext)

	const [freeHours, setFreeHours] = useState(profile.daily_hours)

	let status = {
		done: 0,
		progress: 0
	}

	useEffect(() => {
	}, [])

	useEffect(() => {
		freelas.forEach(freela => {
			const { total_hours, daily_hours, created_at } = freela
			let stats = ''
			if (Utils.getRemainingDays(total_hours, daily_hours, created_at) > 0) {
				status.progress += 1
				stats = 'progress'
			} else {
				status.done += 1
				stats = 'done'
			}

			if (stats === 'progress') {
				if (freeHours > 0) {
					if (daily_hours <= freeHours) {
						setFreeHours(freeHours - daily_hours)
					}
				}
			}
		})
	}, [freelas])

	return (
		<nav className={styles.navbar}
			style={{ background: head }}>
			<div className={styles.topBar}>
				<img className={styles.logo} src="images/logo.svg" alt="Logo" />
				<div className={styles.freehours}>
					<img src="images/alert.svg" alt="" />
					<h2>{freeHours > 0 ? `${freeHours} hours left in your day` : 'You don`t have free hours left'}</h2>
				</div>
				<div className={styles.profileContainer}>
					<div>
						<h3>{profile.name}</h3>
						<h3><Link href={{ pathname: '/Profile' }}>See profile</Link></h3>
					</div>
					<Link href={{ pathname: '/Profile' }}>
						<div className={styles.avatarContainer}>
							<img src={profile.avatar} alt="" />
						</div>
					</Link>
				</div>
			</div>
			<hr className={styles.line} />
			<div className={styles.bottomBar}>
				<div className={styles.statsContainer}>
					<div className={styles.stats}>
						<h3>{freelas.length}</h3>
						<h3>Job so far</h3>
					</div>
					<div className={styles.stats}>
						<h3>{status.progress}</h3>
						<h3>Currently</h3>
					</div>
					<div className={styles.stats}>
						<h3>{status.done}</h3>
						<h3>Done</h3>
					</div>
				</div>
				<div onClick={openCreateModal} className="button">
					<img src="images/plus-orange.svg" />
					<p>Add new job</p>
				</div>
			</div>
		</nav>
	)
}
