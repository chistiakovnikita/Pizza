import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryIndex } from '../../../redux/slices/filterSlice'
import { RootState } from '../../../redux/store'
import Sort from '../Sort'

import './filters.scss'

const Filters: React.FC = () => {
    const categoryIndex = useSelector(
        (state: RootState) => state.filterSlice.categoryIndex
    )
    const dispatch = useDispatch()

    const filters = [
        'Все',
        'Гриль',
        'Острые',
        'С грибами',
        'Вегетарианская',
        'Мясные',
    ]

    return (
        <section className="filters">
            <div className="container">
                <div className="filters__inner">
                    <ul className="filters__menu">
                        {filters.map((filter, index) => (
                            <li
                                onClick={() =>
                                    dispatch(setCategoryIndex(index))
                                }
                                key={index}
                                className={
                                    categoryIndex === index
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
