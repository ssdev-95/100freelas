import React, { useState, createContext} from 'react'

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
            setThumbPosiX('42px')
            setTheme('dark')
        } else {
            setThumbPosiX('-1px')
            setTheme('light')
        }
    }

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
