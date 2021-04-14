import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { ProfileController } from '../../db/ProfileController'
import { ProfileContext } from '../../contexts/Profile'

import Header from '../../components/ProfileHeader'

import styles from '../../styles/pages/Profile.module.css'

export default function Profile() {
	const { register, handleSubmit } = useForm()

	const { profile } = useContext(ProfileContext)

	const hour_value = (profile.monthly_budget/(profile.weekly_days*profile.daily_hours)).toFixed(2).replace(/\D/, ',')

	const update = (data: any) => {
		ProfileController.update(data, profile.id)
	}

	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.content}>
				<div className={styles.left}>
					<img className={styles.avatar} src={profile.avatar} alt="" />
					<h1 className={styles.avatarTitle}>{profile.name}</h1>
					<div className={styles.pricing}>
						<span>Your hour pricing is</span>
						<span>R$ {hour_value} reais</span>
					</div>
					<div onClick={handleSubmit(update)} className={styles.button}>
						<span>Save data</span>
					</div>
				</div>
				<div className={styles.right}>
					<h1 className={styles.title}>Profile data</h1>
					<div className={styles.topperInput}>
						<input type="text" {... register('profile_name')} name="profile_name" defaultValue={profile.name} />
						<input type="text" {... register('profile_avatar')} name="profile_avatar" defaultValue={profile.avatar} />
					</div>
					<h1 className={styles.title}>Planning</h1>
					<div className={styles.lowerInput}>
						<div className={styles.input}>
							<span>How many i<br />wanna get monthly?</span>
							<input
								type="number"
								name="monthly_budget"
								id="monthly_budget"
								defaultValue={profile.monthly_budget} 
								{... register('monthly_budget')} />
						</div>
						<div className={styles.input}>
							<span>How many hours<br />i wanna work daily?</span>
							<input
								type="number"
								name="daily_hours"
								id="daily_hours"
								defaultValue={profile.daily_hours}
								{... register('daily_hours')} />
						</div>
						<div className={styles.input}>
							<span>How many days<br />i wanna work weekly?</span>
							<input
								type="number"
								name="days_per_week"
								id="days_per_week"
								defaultValue={profile.weekly_days}
								{... register('days_per_week')} />
						</div>
						<div className={styles.input}>
							<span>How many vacations<br />i wanna get annually?</span>
							<input
								type="number"
								name="vacations_per_year"
								id="vacations_per_year"
								defaultValue={profile.annual_vacations}
								{... register('vacations_per_year')} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
