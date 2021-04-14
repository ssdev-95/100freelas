import React, { createContext, useState, useEffect } from 'react'
import { ProfileController } from '../db/ProfileController'


interface ProfileContextData {
    profile: any;
    retrieveProfile: ()=>void;
}

interface ProviderProps {
    children: React.ReactNode;
}

export const ProfileContext = createContext({} as ProfileContextData)

export const ProfileProvider = ({children}: ProviderProps) => {
    const [profile, setProfile] = useState({})

    const retrieveProfile = () => {
        ProfileController.getProfile()
    }

    useEffect(()=>{
        retrieveProfile()
        if(localStorage.length>=1) {
            setProfile(JSON.parse(localStorage.getItem('profile')))
        }
    }, [])

    return (
        <ProfileContext.Provider value={{
            profile,
            retrieveProfile
        }}>
            { children }
        </ProfileContext.Provider>
    )
}
