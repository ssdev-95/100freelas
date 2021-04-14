import '../styles/globals.css'

import { ProfileProvider } from '../contexts/Profile'
import { FreelasProvider } from '../contexts/Freelas'

import { CreateContextProvider } from '../contexts/CreateContext'
import { EditContextProvider } from '../contexts/EditContext'
import { DeleteContextProvider } from '../contexts/DeleteContext'

function MyApp({ Component, pageProps }) {
    return (
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
    )
}

export default MyApp
