import React, { useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setSortIndex } from '../../../redux/slices/filterSlice'

import './sort.scss'

const Sort:React.FC = () => {
    const [open, setOpen] = useState(false)

    const sortIndex = useSelector(
        (state) => state.filterSlice.sortIndex
    )
    const dispatch = useDispatch()

    const sortRef = useRef<HTMLDivElement>(null)

    type MenuSortItem = {
        name: string
        sort: string
    }

    const menuSort:MenuSortItem[] = [
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

    const itemSortHandler = (item:MenuSortItem) => {
        dispatch(setSortIndex(item))
        setOpen(false)
    }

    useEffect(() => {
        const bodyClickHandler = (event) => {
            if (!event.composedPath().includes(sortRef.current)) {
                setOpen(false)
            }
        }
        document.body.addEventListener('click', bodyClickHandler)

        return () =>
            document.body.removeEventListener('click', bodyClickHandler)
    }, [])

    return (
        <div ref={sortRef} className="sort">
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
