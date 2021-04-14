import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { CreateContext } from '../../../contexts/CreateContext'

import colors from '../../../styles/colors.json'
import common from '../../../styles/components/Modal.module.css'
import modal from '../../../styles/components/Create.module.css'

export default function AddJob() {
    const {openCreateModal, createJob} = useContext(CreateContext)
    const {register, handleSubmit} = useForm()
    
    return (
        <div className={common.overlay}>
            <div className={common.modal}>
                <div className={modal.left}>
                    <span className={modal.title}>Dados do Job</span>
                    <div className={modal.input}>
                        <span>Job Name</span>
                        <input {... register("job_name")} name="job_name" type="text"/>
                    </div>
                    <div  className={modal.container}>
                        <div className={modal.input}>
                            <span>How many hours<br/>will spend with this job?</span>
                            <input {... register("daily_hours")} name="daily_hours" type="text"/>
                        </div>
                        <div className={modal.input}>
                            <span>Estimated<br/>hours for this Job</span>
                            <input {... register("total_hours")} name="total_hours" type="text"/>
                        </div>
                    </div>
                </div>
                <div className={modal.right}>
                    <img src="images/money-gray.svg" alt=""/>
                    <span>Fill the form on the left to see Job's price</span>
                    <div className={modal.actions}>
                        <div onClick={handleSubmit(createJob)} style={{background: colors.light.save}} className={modal.button}>
                            <span>Save</span>
                        </div>
                        <img onClick={openCreateModal} src="images/trash-24.svg" alt="Delete button"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
