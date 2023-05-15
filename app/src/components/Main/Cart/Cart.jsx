import { useDispatch, useSelector } from 'react-redux'

import CartProduct from '../CartProduct'

import './cart.scss'

const Cart = () => {
    const {products, totalPrice, totalCount} = useSelector((state) => state.cartSlice)
    const dispatch = useDispatch()

    return (
        <section className="cart">
            <div className="cart-header">
                <p className="cart-header__name">название</p>
                <p className="cart-header__quantity">количество</p>
                <p className="cart-header__price">цена</p>
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
