import React, {useContext} from 'react'

import { FreelaController } from '../../../db/FreelanceController'

import { DeleteContext } from '../../../contexts/DeleteContext'

import common from '../../../styles/components/Modal.module.css'
import modal from '../../../styles/components/Delete.module.css'

export default function DeleteJob() {
    const {openDeleteModal, idToDelete} = useContext(DeleteContext)
    
    return (
        <div className={common.overlay}>
            <div className={modal.modal}>
                <img src="images/alert.svg" alt=""/>
                <h2>Delete Job</h2>
                <div className={modal.div}>
                    <span>Do really wanna delete this job?</span>
                    <span>This may be permanent!</span>
                </div>
                <div className={modal.actions}>
                    <span onClick={()=>openDeleteModal('')} className={modal.cancel}>cancel</span>
                    <span onClick={()=>{
                        FreelaController.deleteJob(idToDelete)
                        openDeleteModal('')
                    }} className={modal.delete}>delete</span>
                </div>
            </div>
        </div>
    )
}