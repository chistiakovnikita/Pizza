import { MdDeleteForever } from 'react-icons/md'
import ButtonCounter from '../BattonCounter'
import './cartProduct.scss'

const CartProduct = (props) => {
    const { img, price, title, type, size } = props
    return (
        <div className="cart-product">
            <img className="cart-product__img" src={img} alt="pic" />
            <p className='cart-product__title'>
                {title} <span>{type} тесто</span> <span>{size} см.</span>
            </p>
            <div>
                <ButtonCounter content="-" />
                <span className="cart-product__quantity">0</span>
                <ButtonCounter content="+" />
            </div>
            <span className="cart-product__price">{price}</span>
            <batton className="cart-product__btn-delete">
                <MdDeleteForever />
            </batton>
        </div>
    )
}

export default CartProduct
