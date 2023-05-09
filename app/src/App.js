import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import Header from './components/Header'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import NotFound from './components/pages/NotFound'

import './scss/App.scss'

function App() {
    const [searchValue, setSearchValue] = useState('')
    return (
        <BrowserRouter>
            <div className="App">
                <Header searchValue={searchValue} setSearchValue={setSearchValue} />
                <Routes>
                    <Route  path='/' element={<Home searchValue={searchValue} />}/>
                    <Route path='/cart' element={<Cart />}/>
                    <Route path='*' element={<NotFound />}/>
                   
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
