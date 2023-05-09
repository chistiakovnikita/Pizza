import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { GrClose } from 'react-icons/gr'

import './search.scss'

const Search = (props) => {
    const {searchValue, setSearchValue} = props

    return (
        <div className="search">
            <CiSearch className="search__icon" />
            <input
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                className="search__input"
                placeholder="поиск..."
            />
            {
                searchValue &&  <GrClose onClick={() =>setSearchValue('')} className="search__icon" />
            }
           
        </div>
    )
}

export default Search
