import { useState } from 'react'

import './pizzaCard.scss'

const PizzaCard = (props) => {
    const { img, price, title, type, size } = props

    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState(0)

    const typeName = ['традиционное', 'тонкое']

    return (
        <div className="pizza-card">
            <img className="pizza-card__img" src={img} alt="pizza" />
            <h3 className="pizza-card__title">{title}</h3>
            <div className="pizza-card__params">
                <ul className="pizza-card__list">
                    {type.map((_, index) => (
                        <li
                            onClick={() => setActiveType(index)}
                            key={index}
                            className={
                                activeType === index
                                    ? 'pizza-card__list-item active'
                                    : 'pizza-card__list-item'
                            }
                        >
                            {typeName[index]}
                        </li>
                    ))}
                </ul>

                <ul className="pizza-card__list">
                    {size.map((size, index) => (
                        <li
                            onClick={() => setActiveSize(index)}
                            key={index}
                            className={
                                activeSize === index
                                    ? 'pizza-card__list-item active'
                                    : 'pizza-card__list-item'
                            }
                        >
                            {size} см.
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pizza-card__price">
                <span>от {price} руб.</span>
                <button className="pizza-card__price-btn">
                    Добавить <span>3</span>
                </button>
            </div>
        </div>
    )
}

export default PizzaCard
