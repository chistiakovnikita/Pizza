import { Link, useLocation } from 'react-router-dom'
import { MdShoppingCart } from 'react-icons/md'
import { useSelector } from 'react-redux'

import logo from '../../img/logo.svg'
import Search from '../Search'

import './header.scss'

const Header = () => {
    const { totalPrice, totalCount } = useSelector((state) => state.cartSlice)
    const location = useLocation()

    return (
        <header className="header">
            <div className="container">
                <nav className="header__navigation">
                    <Link className="link" to="/">
                        <div className="logo">
                            <img
                                className="logo__img"
                                src={logo}
                                alt="logo"
                            ></img>
                            <h1 className="logo__text">PIZZA</h1>
                        </div>
                    </Link>

                    {location.pathname !== '/cart' && <Search />}

                    <Link className="header__button" to="cart">
                        <span className="header__button-total">
                            {totalPrice}р
                        </span>
                        <MdShoppingCart className="header__button-icon" />
                        <span>{totalCount}</span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
