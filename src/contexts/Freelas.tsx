import React, { createContext, useState, useEffect } from 'react'
import { FreelaController } from '../db/FreelanceController'

interface FreelasContextData {
    freelas: any[];
    retrieveFreelas: ()=>void;
}

interface ProviderProps {
    children: React.ReactNode;
}

export const FreelasContext = createContext({} as FreelasContextData)

export const FreelasProvider = ({children}: ProviderProps) => {
    const [freelas, setFreelas] = useState([])

    const retrieveFreelas = () => {
        setFreelas(FreelaController.getJobs())
    }

    useEffect(()=>{
        retrieveFreelas()
    }, [])

    return (
        <FreelasContext.Provider value={{
            freelas,
            retrieveFreelas
        }}>
            { children }
        </FreelasContext.Provider>
    )
}
