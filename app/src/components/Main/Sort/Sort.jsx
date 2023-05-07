import { useState } from 'react'

import './sort.scss'

const Sort = () => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(0)

    const menu = ['популярности', 'цене', 'названию']

    const itemSortHandler = (index) => {
        setSelected(index)
        setOpen(false)
    }

    return (
        <div className="sort">
            <div onClick={() => setOpen(!open)} className="sort__label">
                <p>Сортировка по:</p>
                <span>{menu[selected]}</span>
            </div>

            {open && (
                <ul className="sort__menu">
                    {menu.map((item, index) => (
                        <li
                            onClick={() => itemSortHandler(index)}
                            key={index}
                            className="sort__item"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Sort
