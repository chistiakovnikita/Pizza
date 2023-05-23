import { calcTotalPrice ,calcTotalCount} from './total'

export const getLocalStorage = () => {
    const data = localStorage.getItem('cart')
    const products = data ? JSON.parse(data) : []

    const totalPrice = calcTotalPrice(products)
    const totalCount = calcTotalCount(products)

    return {
        products,
        totalPrice,
        totalCount,
    }
}
