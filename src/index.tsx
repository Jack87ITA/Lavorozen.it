import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from './Styles/Theme'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import * as serviceWorkerRegistration from './service-worker-registration'

import { persistor, store } from './redux/Store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}></PersistGate>
            <ChakraBaseProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ChakraBaseProvider>
        </Provider>
    </React.StrictMode>
)

serviceWorkerRegistration.register()
