import { useState, createContext, ReactNode } from 'react'

interface ProviderProps {
    children: ReactNode;
}

interface ContextData {
    openCreateModal: ()=>void;
    createJobModalOpen: boolean;
}

export const CreateContext = createContext({} as ContextData)

export const CreateContextProvider = ({children}: ProviderProps) => {
    const [createJobModalOpen, setCreateJobModalOpen] = useState(false)

    function openCreateModal() {
        setCreateJobModalOpen(!createJobModalOpen)
    }
    
    return (
        <CreateContext.Provider value={{
            openCreateModal,
            createJobModalOpen
        }}>
            {children}
        </CreateContext.Provider>
    )
}
