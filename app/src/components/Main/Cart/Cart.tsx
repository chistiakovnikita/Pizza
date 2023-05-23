import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearProducts } from '../../../redux/slices/cartSlice'

import CartProduct from '../CartProduct'
import { RootState } from '../../../redux/store'

import './cart.scss'

const Cart: React.FC = () => {
    const { products, totalPrice, totalCount } = useSelector(
        (state: RootState) => state.cartSlice
    )
    const dispatch = useDispatch()

    

    useEffect(() => {
        const json = JSON.stringify(products)
        localStorage.setItem('cart', json)
    }, [products])

    return (
        <section className="cart">
            <div className="cart-header">
                <p className="cart-header__name">название</p>
                <p className="cart-header__quantity">количество</p>
                <p className="cart-header__price">цена</p>
                <button
                    onClick={() => dispatch(clearProducts())}
                    className="cart-header__btn"
                >
                    очистить корзину
                </button>
            </div>

            {products.map((product) => (
                <CartProduct key={product.id} {...product} />
            ))}

            <div className="cart-footer">
                <span className="cart-footer__quantity">{totalCount}</span>
                <span className="cart-footer__price">{totalPrice}</span>
            </div>
        </section>
    )
}

export default Cart
