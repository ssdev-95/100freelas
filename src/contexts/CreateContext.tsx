import { useState, createContext, ReactNode } from 'react'
import { FreelaController } from '../db/FreelanceController'

interface ProviderProps {
    children: ReactNode;
}

interface ContextData {
    createJob: (params: any)=>void;
    openCreateModal: ()=>void;
    createJobModalOpen: boolean;
}

export const CreateContext = createContext({} as ContextData)

export const CreateContextProvider = ({children}: ProviderProps) => {
    const [createJobModalOpen, setCreateJobModalOpen] = useState(false)

    function openCreateModal() {
        setCreateJobModalOpen(!createJobModalOpen)
    }

    const createJob = (data: any) => {
        // console.log(data)
        FreelaController.createJob({
            name: data.job_name,
            daily_hours: data.daily_hours,
            total_hours: data.total_hours,
            created_at: Date.now()
        })
        openCreateModal()
    }
    
    return (
        <CreateContext.Provider value={{
            createJob,
            openCreateModal,
            createJobModalOpen
        }}>
            {children}
        </CreateContext.Provider>
    )
}
