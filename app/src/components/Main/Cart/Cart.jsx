import { MdDeleteForever } from 'react-icons/md'
import ButtonCounter from '../BattonCounter/ButtonCounter'

import './cart.scss'

const Cart = () => {
  return (
    <section className='cart'>
            <div className="cart-header">
                <p className="cart-header__name">product name</p>
                <p className="cart-header__quantity">quantity</p>
                <p className="cart-header__price">price</p>
            </div>

            <div className="cart-product">
                <img
                    className="cart-product__img"
                    src="https://dodopizza-a.akamaihd.net/static/Img/Products/defa2af4c6ed4a9f92aaf0b6287c171c_366x366.webp"
                    alt="pic"
                />
                <p>911</p>
                <div>
                    <ButtonCounter content="-" />
                    <span className="cart-product__quantity">0</span>
                    <ButtonCounter content="+" />
                </div>
                <span className="cart-product__price">10000</span>
                <batton className="cart-product__btn-delete">
                    <MdDeleteForever />
                </batton>
            </div>

            <div className="cart-footer">
                <span className="cart-footer__quantity">1</span>
                <span className="cart-footer__price">2</span>
            </div>
        </section>
  )
}

export default Cart