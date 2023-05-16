import { useDispatch } from 'react-redux'
import { MdDeleteForever } from 'react-icons/md'
import ButtonCounter from '../BattonCounter'
import { decreaseCount, addProduct, deleteProduct } from '../../../redux/slices/cartSlice'
import './cartProduct.scss'

const CartProduct = (props) => {
    const { img, price, title, type, size, count, id } = props

    const dispatch = useDispatch()

    const increase = () => {
        dispatch(
            addProduct({
                id,
            })
        )
    }
    const decrease = () => {
        dispatch(decreaseCount(id))
    }

    const remove = () => {
        dispatch(deleteProduct(id))
    }

    return (
        <div className="cart-product">
            <img className="cart-product__img" src={img} alt="pic" />
            <p className="cart-product__title">
                {title} <span>{type} тесто</span> <span>{size} см.</span>
            </p>
            <div>
                <ButtonCounter onClick={decrease} content="-" />
                <span className="cart-product__quantity">{count}</span>
                <ButtonCounter onClick={increase} content="+" />
            </div>
            <span className="cart-product__price">{price * count}</span>
            <batton onClick={remove} className="cart-product__btn-delete">
                <MdDeleteForever />
            </batton>
        </div>
    )
}

export default CartProduct
