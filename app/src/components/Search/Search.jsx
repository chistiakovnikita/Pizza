import { useCallback, useContext, useRef, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { GrClose } from 'react-icons/gr'
import { AppContext } from '../../App'
import debounce from 'lodash.debounce'

import './search.scss'

const Search = () => {
    const [value, setValue] = useState('')
    const { setSearchValue } = useContext(AppContext)

    const inputRef = useRef()

    const clearHandler = () => {
        setSearchValue('')
        setValue('')
        inputRef.current.focus()
    }

    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearchValue(str)
        }, 1500),
        []
    )

    const changeInputHadler = (event) => {
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
