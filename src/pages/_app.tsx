import '../styles/globals.css'

import { CreateContextProvider } from '../contexts/CreateContext'
import { EditContextProvider } from '../contexts/EditContext'
import { DeleteContextProvider } from '../contexts/DeleteContext'

function MyApp({ Component, pageProps }) {
    return (
        <CreateContextProvider>
            <EditContextProvider>
                <DeleteContextProvider>
                    <Component {...pageProps} />
                </DeleteContextProvider>
            </EditContextProvider>
        </CreateContextProvider>
    )
}

export default MyApp
