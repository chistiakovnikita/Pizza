import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setSortIndex } from '../../../redux/slices/filterSlice'

import './sort.scss'

const Sort = () => {
    const [open, setOpen] = useState(false)

    const sortIndex = useSelector((state) =>state.filterSlice.sortIndex)
    const dispatch = useDispatch()

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
        dispatch(setSortIndex(index))
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
