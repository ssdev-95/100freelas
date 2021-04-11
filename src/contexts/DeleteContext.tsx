import { useState, createContext, ReactNode } from 'react'

interface ProviderProps {
    children: ReactNode;
}

interface ContextData {
    openDeleteModal: ()=>void;
    deleteJobModalOpen: boolean;
}

export const DeleteContext = createContext({} as ContextData)

export const DeleteContextProvider = ({children}: ProviderProps) => {
    const [deleteJobModalOpen, setDeleteJobModalOpen] = useState(false)

    function openDeleteModal() {
        setDeleteJobModalOpen(!deleteJobModalOpen)
    }

    return (
        <DeleteContext.Provider value={{
            openDeleteModal,
            deleteJobModalOpen
        }}>
            {children}
        </DeleteContext.Provider>
    )
}
