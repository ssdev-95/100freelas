import React, { useContext } from 'react'

import { EditContext } from '../../contexts/EditContext'
import { DeleteContext } from '../../contexts/DeleteContext'

import styles from '../../styles/components/Card.module.css'
import colors from '../../styles/colors.json'

interface CardProps {
    job: {
        id: number,
        name: string,
        price: string,
        remainingDays: number
    }
}

export default function Card({job}) {
    const {openEditModal} = useContext(EditContext)
    const {openDeleteModal} = useContext(DeleteContext)

    const {id, name, price, remainingDays} = job
    const status = remainingDays > 0 ? 'In Progress' : 'Done'
    const bg = remainingDays > 0 ? colors.light['badge-progress-background']: colors.light['badge-done-background']
    const text = remainingDays > 0 ? colors.light.save : colors.light.delete

    return (
        <div className={styles.cardContainer}>
            <div className={styles.jobDataContainer}>
                <span className={styles.id}>{id}</span>
                <span>{name}</span>
            </div>
            <div className={styles.remainingDaysContainer}>
                <span>Due date</span>
                <span>{remainingDays} days to deliver</span>
            </div>
            <div className={styles.priceContainer}>
                <span>Price</span>
                <span>{price}</span>
            </div>
            <div style={{background: bg, color: text}} className={styles.statusContainer}>
                <span>{status}</span>
            </div>
            <div className={styles.actions}>
                <img onClick={openEditModal} src="images/edit-24.svg" alt="Edit button"/>
                <img onClick={openDeleteModal} src="images/trash-24.svg" alt="Delete button"/>
            </div>
        </div>
    )
}
