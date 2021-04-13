import React, { useContext } from 'react'

import { ProfileController } from '../../db/ProfileController'
import { Utils } from '../../utils/FreelaUtils'

import { EditContext } from '../../contexts/EditContext'
import { DeleteContext } from '../../contexts/DeleteContext'

import styles from '../../styles/components/Card.module.css'
import colors from '../../styles/colors.json'

export default function Card({job, index}) {
    const { openEditModal } = useContext(EditContext)
    const { openDeleteModal } = useContext(DeleteContext)

    const { id, name, total_hours, daily_hours, created_at } = job
    const remainingDays = Utils.getRemainingDays(total_hours, daily_hours, created_at)

    const status = remainingDays > 0 ? 'In Progress' : 'Done'
    const bg = remainingDays > 0 ? colors.light['badge-progress-background']: colors.light['badge-done-background']
    const text = remainingDays > 0 ? colors.light.save : colors.light.delete

    return (
        <div className={styles.cardContainer}>
            <div className={styles.jobDataContainer}>
                <span className={styles.id}>{index+1}</span>
                <span>{name}</span>
            </div>
            <div className={styles.remainingDaysContainer}>
                <span>Due date</span>
                <span>{remainingDays>0?`${remainingDays} days to deliver` : 'Job done'}</span>
            </div>
            <div className={styles.priceContainer}>
                <span>Price</span>
                <span>{`R$ ${Utils.calculateBudget(total_hours, 75).toFixed(2).replace(/\D/, ',')}`}</span>
            </div>
            <div style={{background: bg, color: text}} className={styles.statusContainer}>
                <span>{status}</span>
            </div>
            <div className={styles.actions}>
                <img onClick={()=>openEditModal(job)} src="images/edit-24.svg" alt="Edit button"/>
                <img onClick={()=>openDeleteModal(id)} src="images/trash-24.svg" alt="Delete button"/>
            </div>
        </div>
    )
}
