import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import PizzaCard from '../../PizzaCard'
import Skeleton from '../../Skeleton'
import { AppContext } from '../../../App'

import './content.scss'

const Content = () => {
    const { searchValue } = useContext(AppContext)
    const { categoryIndex, sortIndex } = useSelector(
        (state) => state.filterSlice
    )
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()
    const category = categoryIndex > 0 ? `category=${categoryIndex}` : ''
    
    useEffect(() => {
        setIsLoading(true)
        axios
            .get(
                `https://6457bacd0c15cb14820f9c6c.mockapi.io/pizzas?${category}&sortBy=${sortIndex.sort}&search=${searchValue}`
            )
            .then((response) => setData(response.data))
            .finally(() => setIsLoading(false))
    }, [category, sortIndex, searchValue])

    useEffect(() => {
        const queryString = qs.stringify({
            category,
            sort: sortIndex.sort,
            search: searchValue,
        })
        navigate(`?${queryString}`)
    }, [category, sortIndex, searchValue, navigate])

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
