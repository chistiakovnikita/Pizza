import { MdShoppingCart } from 'react-icons/md'

import logo from '../../img/logo.svg'

import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__navigation">
                    <div className="logo">
                        <img className="logo__img" src={logo} alt="logo"></img>
                        <h1 className="logo__text">PIZZA</h1>
                    </div>
                    <button type="button" className="header__button">
                        <span className="header__button-total">100р</span>
                        <MdShoppingCart className="header__button-icon" />
                        <span>5</span>
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header
