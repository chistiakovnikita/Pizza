import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getLocalStorage } from '../../components/utils/getLocalStorage'

export type CartProductTypes = {
    id: string
    title: string
    price: number
    img: string
    type: string
    size: string
    count: number
}

interface CartSliceState {
    totalPrice: number
    totalCount: number
    products: CartProductTypes[]
}

const { totalPrice, products, totalCount } = getLocalStorage()



const initialState: CartSliceState = {
    totalPrice,
    products,
    totalCount,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<CartProductTypes>) {
            const findProduct = state.products.find(
                (product) => product.id === action.payload.id
            )

            if (findProduct) {
                findProduct.count++
            } else {
                state.products.push({
                    ...action.payload,
                    count: 1,
                })
            }

            state.totalPrice = state.products.reduce(
                (acc, product) => acc + product.count * product.price,
                0
            )

            state.totalCount = state.products.reduce(
                (acc, product) => acc + product.count,
                0
            )
        },

        decreaseCount(state, action: PayloadAction<string>) {
            const findProduct = state.products.find(
                (product) => product.id === action.payload
            )

            if (findProduct && findProduct.count > 1) {
                findProduct.count--
            }

            state.totalPrice = state.products.reduce(
                (acc, product) => acc + product.count * product.price,
                0
            )

            state.totalCount = state.products.reduce(
                (acc, product) => acc + product.count,
                0
            )
        },

        deleteProduct(state, action: PayloadAction<string>) {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            )

            state.totalPrice = state.products.reduce(
                (acc, product) => acc + product.count * product.price,
                0
            )

            state.totalCount = state.products.reduce(
                (acc, product) => acc + product.count,
                0
            )
        },
        clearProducts(state) {
            state.products = []
            state.totalPrice = 0
            state.totalCount = 0
        },
    },
})

export const { addProduct, deleteProduct, clearProducts, decreaseCount } =
    cartSlice.actions

export default cartSlice.reducer
