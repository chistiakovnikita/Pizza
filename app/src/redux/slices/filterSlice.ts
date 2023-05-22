import {PayloadAction, createSlice } from '@reduxjs/toolkit'

type Sort ={
    name:string
    sort: 'price' | 'title' | 'rating'
}

interface FilterSliceState {
    searchValue:string
    categoryIndex:number
    sortIndex:Sort
}

const initialState: FilterSliceState = {
    searchValue: '',
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
        setCategoryIndex(state, action:PayloadAction<number>) {
            state.categoryIndex = action.payload
        },
        setSortIndex(state, action:PayloadAction<Sort>) {
            state.sortIndex = action.payload
        },
        setSearchValue(state,action:PayloadAction<string>) {
            state.searchValue = action.payload
        }
    },
})

export const { setCategoryIndex, setSortIndex, setSearchValue } = filterSlice.actions

export default filterSlice.reducer
