import { useState, createContext, ReactNode } from 'react'

interface ProviderProps {
    children: ReactNode;
}

interface ContextData {
    openEditModal: ()=>void;
    editJobModalOpen: boolean;
}

export const EditContext = createContext({} as ContextData)

export const EditContextProvider = ({children}: ProviderProps) => {
    const [editJobModalOpen, setEditJobModalOpen] = useState(false)

    function openEditModal() {
        setEditJobModalOpen(!editJobModalOpen)
    }

    return (
        <EditContext.Provider value={{
            openEditModal,
            editJobModalOpen
        }}>
            {children}
        </EditContext.Provider>
    )
}
