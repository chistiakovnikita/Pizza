import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzasStatus',
    async (params) => {
        const { category, sortIndex, searchValue } = params
        const response = await axios.get(
            `https://=6457bacd0c15cb14820f9c6c.mockapi.io/pizzas?${category}&sortBy=${sortIndex.sort}&search=${searchValue}`
        )
        return response.data
    }
)

const initialState = {
    data: [],
    status: 'loading',
}

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload
        },
    },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.status = 'loading'
            state.data = [] //чтобы не получить старые данные
        },

        [fetchPizzas.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = 'succes'
        },

        [fetchPizzas.rejected]: (state) => {
            state.status = 'error'
            state.data = []
        },
    },
})

export const { setData } = pizzasSlice.actions

export default pizzasSlice.reducer
