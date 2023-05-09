import { MdShoppingCart } from 'react-icons/md'

import logo from '../../img/logo.svg'

import './header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
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
                    <Link className="header__button" to="cart">
                        <span className="header__button-total">100р</span>
                        <MdShoppingCart className="header__button-icon" />
                        <span>5</span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
