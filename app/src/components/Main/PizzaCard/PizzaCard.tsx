import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartProduct, addProduct } from '../../../redux/slices/cartSlice'
import { RootState } from '../../../redux/store'
import './pizzaCard.scss'

type PizzaCardProps = {
    img:string
    price:number
    title:string
    type:number[]
    size :number[]
    id:string
}

const PizzaCard:React.FC<PizzaCardProps> = (props) => {
    const { img, price, title, type, size, id } = props

    const currentProduct = useSelector((state: RootState) =>
        state.cartSlice.products.find((product) => product.id === id)
    )
    // нужна проверка т.к. приходит undefined
    const count = currentProduct ? currentProduct.count : 0
    
    const dispatch = useDispatch()

    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState(0)

    const typeName = ['традиционное', 'тонкое']
    const sizeValue = ['25', '30', '35']

    const addProductHandler = () => {
        const product: CartProduct = {
            id,
            title,
            price,
            img,
            type: typeName[activeType],
            size: sizeValue[activeSize],
            count:0,
        }

        dispatch(addProduct(product))
    }

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
                <button
                    onClick={addProductHandler}
                    className="pizza-card__price-btn"
                >
                    Добавить {count > 0 && <span>{count}</span>}
                </button>
            </div>
        </div>
    )
}

export default PizzaCard
