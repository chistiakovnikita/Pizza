import { useState } from 'react'

import './sort.scss'

const Sort = (props) => {
    const { sortIndex, setSortIndex } = props

    const [open, setOpen] = useState(false)

    const menuSort = [
        {
            name: 'популярности',
            sort: 'rating',
        },
        {
            name: 'цене',
            sort: 'price',
        },
        {
            name: 'названию',
            sort: 'title',
        },
    ]

    const itemSortHandler = (index) => {
        setSortIndex(index)
        setOpen(false)
    }

    return (
        <div className="sort">
            <div onClick={() => setOpen(!open)} className="sort__label">
                <p>Сортировка по:</p>
                <span>{sortIndex.name}</span>
            </div>

            {open && (
                <ul className="sort__menu">
                    {menuSort.map((item, index) => (
                        <li
                            onClick={() => itemSortHandler(item)}
                            key={index}
                            className="sort__item"
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Sort
