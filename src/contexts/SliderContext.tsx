import React, { useState, useEffect, createContext} from 'react'

interface ProviderProps {
    children: React.ReactNode;
}

interface SliderContextData {
    theme: string;
    thumbPosiX: string;
    slide: ()=>void;
}

export const SliderContext = createContext({} as SliderContextData)

export const SliderContextProvider = ({children}: ProviderProps) => {
    //theme can be 'light' or 'dark'
    const [theme, setTheme] = useState('light')
    const [thumbPosiX, setThumbPosiX] = useState('-1px')

    const slide = () => {
        if(thumbPosiX==='-1px') { 
            localStorage.setItem('theme', 'dark')
            setTheme(localStorage.getItem('theme'))
        } else {
            localStorage.setItem('theme', 'light')
            setTheme(localStorage.getItem('theme'))
        }
    }

    useEffect(()=>{
        setTheme(localStorage.getItem('theme'))
    }, [])


    useEffect(()=>{
        theme === 'light' ? setThumbPosiX('-1px') : setThumbPosiX('42px')
    }, [theme])

    return (
        <SliderContext.Provider value={{
            theme,
            thumbPosiX,
            slide
        }}>
            {children}
        </SliderContext.Provider>
    )
}
