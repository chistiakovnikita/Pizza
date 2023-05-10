import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryIndex: 0,
    sortIndex: {
        name: 'популярности',
        sort: 'rating',
    },
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryIndex(state, action) {
            state.categoryIndex = action.payload
        },
        setSortIndex(state, action) {
            state.sortIndex = action.payload
        },
    },
})

export const { setCategoryIndex, setSortIndex } = filterSlice.actions

export default filterSlice.reducer
