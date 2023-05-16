import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    products: [],
    totalCount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action) {
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

        decreaseCount(state, action) {
            const findProduct = state.products.find(
                (product) => product.id === action.payload
            )

            if (findProduct) {
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

        deleteProduct(state, action) {
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