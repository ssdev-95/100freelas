import { useState, createContext, ReactNode } from 'react'

interface ProviderProps {
    children: ReactNode;
}

interface ContextData {
    openDeleteModal: (params: string)=>void;
    deleteJobModalOpen: boolean;
    idToDelete: string;
}

export const DeleteContext = createContext({} as ContextData)

export const DeleteContextProvider = ({children}: ProviderProps) => {
    const [deleteJobModalOpen, setDeleteJobModalOpen] = useState(false)
    const [idToDelete, setIdToDelete] = useState('')

    function openDeleteModal(id) {
        setDeleteJobModalOpen(!deleteJobModalOpen)
        setIdToDelete(id)
    }

    return (
        <DeleteContext.Provider value={{
            openDeleteModal,
            deleteJobModalOpen,
            idToDelete
        }}>
            {children}
        </DeleteContext.Provider>
    )
}
