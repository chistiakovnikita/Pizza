import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createContext, useState } from 'react'

import Header from './components/Header'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import NotFound from './components/pages/NotFound'

import './scss/App.scss'

export const AppContext = createContext()

function App() {
    const [searchValue, setSearchValue] = useState('')
   
    return (
        <BrowserRouter>
            <div className="App">
                <AppContext.Provider
                    value={{
                        searchValue,
                        setSearchValue,
                    }}
                >
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </AppContext.Provider>
            </div>
        </BrowserRouter>
    )
}

export default App
