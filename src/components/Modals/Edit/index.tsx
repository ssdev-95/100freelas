import React from 'react'
import common from '../../../styles/components/Modal.module.css'

export default function AddJob() {
    return (
        <div className={common.overlay}>
            <div className={common.modal}></div>
        </div>
    )
}