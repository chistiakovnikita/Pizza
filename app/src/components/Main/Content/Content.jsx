import { useEffect, useState } from 'react'
import PizzaCard from '../PizzaCard'
import Skeleton from '../Skeleton'

import './content.scss'

const Content = (props) => {
    const { categoryIndex, sortIndex } = props

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch(
            `https://6457bacd0c15cb14820f9c6c.mockapi.io/pizzas?${
                categoryIndex > 0 ? `category=${categoryIndex}` : ''
            }&sortBy=${sortIndex.sort}`
        )
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
            .finally(() => setIsLoading(false))
    }, [categoryIndex,sortIndex])

    return (
        <section className="content">
            <div className="container">
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__inner">
                    {isLoading
                        ? [...new Array(4)].map((_, index) => (
                              <Skeleton key={index} />
                          ))
                        : data.map((pizza) => (
                              <PizzaCard key={pizza.id} {...pizza} />
                          ))}
                </div>
            </div>
        </section>
    )
}

export default Content
