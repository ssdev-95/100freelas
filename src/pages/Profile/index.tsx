import React from 'react'

import Header from '../../components/ProfileHeader'

import styles from '../../styles/pages/Profile.module.css'

export default function Profile() {
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.content}>
				<div className={styles.left}>
					<img className={styles.avatar} src="https://github.com/xSallus.png" alt="" />
					<h1 className={styles.avatarTitle}>Salomao Souza</h1>
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
						<input type="text" placeholder="Name" />
						<input type="text" placeholder="Avatar url" />
					</div>
					<h1 className={styles.title}>Planning</h1>
					<div className={styles.lowerInput}>
						<div className={styles.input}>
							<span>How many i<br />wanna get monthly?</span>
							<input
								type="number"
								name="monthly_budget"
								id="monthly_budget" />
						</div>
						<div className={styles.input}>
							<span>How many hours<br />i wanna work daily?</span>
							<input
								type="number"
								name="daily_hours"
								id="daily_hours" />
						</div>
						<div className={styles.input}>
							<span>How many days<br />i wanna work weekly?</span>
							<input
								type="number"
								name="days_per_week"
								id="days_per_week" />
						</div>
						<div className={styles.input}>
							<span>How many vacations<br />i wanna get annually?</span>
							<input
								type="number"
								name="vacations_per_year"
								id="vacations_per_year" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
