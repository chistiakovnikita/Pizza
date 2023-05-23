import React, { useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {  SortBy, setSortIndex } from '../../../redux/slices/filterSlice'
import { RootState } from '../../../redux/store'

import './sort.scss'




const Sort: React.FC = () => {
    const [open, setOpen] = useState(false)

    const sortIndex = useSelector((state: RootState) => state.filterSlice.sortIndex)
    const dispatch = useDispatch()

    const sortRef = useRef<HTMLDivElement>(null)

    const menuSort: SortBy[] = [
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

    const itemSortHandler = (item: SortBy) => {
        dispatch(setSortIndex(item))
        setOpen(false)
    }

    useEffect(() => {
        const bodyClickHandler = (event: MouseEvent) => {
            const _event = event as MouseEvent & {
                composedPath(): Node[]
            } 

            if (
                sortRef.current && // sortRef.current && (проверка для ts
                !_event.composedPath().includes(sortRef.current)
            ) {
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
