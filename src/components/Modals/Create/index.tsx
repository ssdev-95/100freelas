import React from 'react'
import {Button} from '../../Button'

import colors from '../../../styles/colors.json'
import common from '../../../styles/components/Modal.module.css'
import modal from '../../../styles/components/Create.module.css'

export default function AddJob() {
    return (
        <div className={common.overlay}>
            <div className={common.modal}>
                <div className={modal.left}>
                    <span>Dados do Job</span>
                    <hr/>
                    <div className={modal.container}>
                        <span>Job Name</span>
                        <input name="job_name" type="text"/>
                    </div>
                    <div  className={modal.container}>
                        <div>
                            <span>How many hours will spend with this job?</span>
                            <input name="daily_hours" type="text"/>
                        </div>
                        <div>
                            <span>Estimated hours for this Job</span>
                            <input name="total_hours" type="text"/>
                        </div>
                    </div>
                </div>
                <div className={modal.right}>
                    <img src="" alt=""/>
                    <span></span>
                    <div>
                        <Button bg={colors.light.save} src='' title='Salvar' />
                        <img src="images/trash-24.svg" alt="Delete button"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
