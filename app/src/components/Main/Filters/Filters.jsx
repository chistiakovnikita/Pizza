import { useState } from 'react'

import Sort from '../Sort'
import './filters.scss'

const Filters = () => {
    const [activeFilter, setActiveFilter] = useState(0)

    const filters = [
        'Все',
        'Гриль',
        'Острые',
        'С грибами',
        'Вегетарианская',
        'Мясные',
    ]

    const filterHandler = (index) => {
        setActiveFilter(index)
    }

    return (
        <section className="filters">
            <div className="container">
                <div className="filters__inner">
                    <ul className="filters__menu">
                        {filters.map((filter, index) => (
                            <li
                                onClick={() => filterHandler(index)}
                                key={index}
                                className={
                                    activeFilter === index
                                        ? 'filters__item active'
                                        : 'filters__item'
                                }
                            >
                                {filter}
                            </li>
                        ))}
                    </ul>

                    <Sort />
                </div>
            </div>
        </section>
    )
}

export default Filters
