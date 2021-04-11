import React, { useContext } from 'react'

import { EditContext } from '../../../contexts/EditContext'

import colors from '../../../styles/colors.json'
import common from '../../../styles/components/Modal.module.css'
import modal from '../../../styles/components/Create.module.css'

export default function EditJob() {
    const {openEditModal} = useContext(EditContext)
    
    return (
        <div className={common.overlay}>
            <div className={common.modal}>
                <img
                  onClick={openEditModal} 
                  className={modal.exit} 
                  src="images/open-door.svg" />
                <div className={modal.left}>
                    <span className={modal.title}>Dados do Job</span>
                    <div className={modal.input}>
                        <span>Job Name</span>
                        <input name="job_name" type="text"/>
                    </div>
                    <div  className={modal.container}>
                        <div className={modal.input}>
                            <span>How many hours<br/>will spend with this job?</span>
                            <input name="daily_hours" type="text"/>
                        </div>
                        <div className={modal.input}>
                            <span>Estimated<br/>hours for this Job</span>
                            <input name="total_hours" type="text"/>
                        </div>
                    </div>
                </div>
                <div className={modal.right}>
                    <img src="images/money-gray.svg" alt=""/>
                    <span>Fill the form on the left to see Job's price</span>
                    <div className={modal.actions}>
                        <div style={{background: colors.light.save}} className={modal.button}>
                            <span>Save</span>
                        </div>
                        <img src="images/trash-24.svg" alt="Delete button"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
