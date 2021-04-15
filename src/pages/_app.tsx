import '../styles/globals.css'

import { ProfileProvider } from '../contexts/Profile'
import { FreelasProvider } from '../contexts/Freelas'

import { CreateContextProvider } from '../contexts/CreateContext'
import { EditContextProvider } from '../contexts/EditContext'
import { DeleteContextProvider } from '../contexts/DeleteContext'

import { SliderContextProvider } from '../contexts/SliderContext'

function MyApp({ Component, pageProps }) {
    return (
        <SliderContextProvider>
            <ProfileProvider>
                <FreelasProvider>
                    <CreateContextProvider>
                        <EditContextProvider>
                            <DeleteContextProvider>
                                <Component {...pageProps} />
                            </DeleteContextProvider>
                        </EditContextProvider>
                    </CreateContextProvider>
                </FreelasProvider>
            </ProfileProvider>
        </SliderContextProvider>
    )
}

export default MyApp
