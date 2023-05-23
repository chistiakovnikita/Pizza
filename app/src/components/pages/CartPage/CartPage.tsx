import { useSelector } from 'react-redux'
import Cart from '../../Main/Cart'
import CartEmpty from '../../Main/CartEmpty'
import { RootState } from '../../../redux/store'

const CartPage = () => {
    const products = useSelector((state: RootState) => state.cartSlice.products)

    return <>{products.length > 0 ? <Cart /> : <CartEmpty />}</>
}

export default CartPage
