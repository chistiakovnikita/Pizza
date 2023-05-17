import { useSelector } from 'react-redux'
import Cart from '../../Main/Cart'
import CartEmpty from '../../Main/CartEmpty'

const CartPage = () => {
    const products = useSelector((state) => state.cartSlice.products)

    return <>{products.length > 0 ? <Cart /> : <CartEmpty />}</>
}

export default CartPage
