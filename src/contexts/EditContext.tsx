import { useState, createContext, ReactNode } from 'react'

import { FreelaController } from '../db/FreelanceController'

interface ProviderProps {
    children: ReactNode;
}

interface ContextData {
    editJob: any;
    openEditModal: (params: any)=>void;
    editJobModalOpen: boolean;
    onSubmit: (params: any)=>void;
}

export const EditContext = createContext({} as ContextData)

export const EditContextProvider = ({children}: ProviderProps) => {
    const [editJobModalOpen, setEditJobModalOpen] = useState(false)
    const [editJob, setEditJob] = useState(null)

    function openEditModal(job) {
        setEditJob(job)
        setEditJobModalOpen(!editJobModalOpen)
    }

    const onSubmit = (data) =>{
        FreelaController.updateJob(data, editJob.id)
        openEditModal(null)
    }

    return (
        <EditContext.Provider value={{
            editJob,
            openEditModal,
            editJobModalOpen,
            onSubmit
        }}>
            {children}
        </EditContext.Provider>
    )
}
