import React from 'react'
import { Link } from 'react-router-dom'
import cartEmpty from '../../../img/cart-empty.png'

import './cartEmpty.scss'


const CartEmpty:React.FC = () => {
    return (
        <section className="cart-empty">
            <div className="container">
                <h2 className="cart-empty__title">Корзина пустая</h2>
                <p className='cart-empty__text'>Для оформления заказа перейдите на</p>
                <Link className='cart-empty__link link ' to="/">главную</Link>
                <img className='cart-empty__img' src={cartEmpty} alt="pic" />
            </div>
        </section>
    )
}

export default CartEmpty
