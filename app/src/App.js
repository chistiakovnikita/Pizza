import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import NotFound from './components/pages/NotFound'

import './scss/App.scss'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route  path='/' element={<Home />}/>
                    <Route path='/cart' element={<Cart />}/>
                    <Route path='*' element={<NotFound />}/>
                   
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
