import React from 'react'
import { useCallback, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CiSearch } from 'react-icons/ci'
import { GrClose } from 'react-icons/gr'
import debounce from 'lodash.debounce'
import { setSearchValue } from '../../redux/slices/filterSlice'

import './search.scss'

const Search: React.FC = () => {
    const [value, setValue] = useState<string>('')

    const dispatch = useDispatch()
    const inputRef = useRef<HTMLInputElement>(null)

    const clearHandler = () => {
        dispatch(setSearchValue(''))
        setValue('')
        inputRef.current?.focus() // ts (?null)
    }

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str))
        }, 300),
        []
    )

    const changeInputHadler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }

    return (
        <div className="search">
            <CiSearch className="search__icon" />
            <input
                ref={inputRef}
                value={value}
                onChange={changeInputHadler}
                className="search__input"
                placeholder="поиск..."
            />
            {value && (
                <GrClose onClick={clearHandler} className="search__icon" />
            )}
        </div>
    )
}

export default Search
