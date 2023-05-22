import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { CartProduct } from './cartSlice'

type FetchPizzasArgs = Record<string, string>

export const fetchPizzas = createAsyncThunk<Data[], FetchPizzasArgs>(
    'pizzas/fetchPizzasStatus',
    async (params) => {
        const { category, sortIndex, searchValue } = params
        const response = await axios.get<Data[]>(
            `https://6457bacd0c15cb14820f9c6c.mockapi.io/pizzas?${category}&sortBy=${sortIndex.sort}&search=${searchValue}`
        )
        return response.data
    }
)

type Data = {
    img: string
    price: number
    title: string
    type: number[]
    size: number[]
    id: string
}
enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

interface pizzasSliceState {
    data: Data[]
    status: Status
}

const initialState: pizzasSliceState = {
    data: [],
    status: Status.LOADING
}

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<Data[]>) {
            state.data = action.payload
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = Status.LOADING
            state.data = [] //чтобы не получить старые данные
        }),
        
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = Status.SUCCESS
        }),

        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = Status.ERROR
            state.data = []
        })
    },
})

export const { setData } = pizzasSlice.actions

export default pizzasSlice.reducer
