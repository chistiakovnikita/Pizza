import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/pages/Home'
import CartPage from './components/pages/CartPage'
import SinglePizza from './components/pages/SinglePizza/SinglePizza'
import NotFound from './components/pages/NotFound'

import './scss/App.scss'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/pizza/:id" element={<SinglePizza />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
