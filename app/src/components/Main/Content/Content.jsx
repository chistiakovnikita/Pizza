import { useCallback, useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../App'
import qs from 'qs'

import { fetchPizzas } from '../../../redux/slices/pizzasSlice'
import PizzaCard from '../PizzaCard'
import Skeleton from '../Skeleton'

import './content.scss'

const Content = () => {
    const { categoryIndex, sortIndex, searchValue } = useSelector(
        (state) => state.filterSlice
    )
    const { data, status } = useSelector((state) => state.pizzasSlice)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const category = categoryIndex > 0 ? `category=${categoryIndex}` : ''

    const getData = useCallback(async () => {
        dispatch(
            fetchPizzas({
                category, //параметры category,sortIndex,searchValue необходимо передать в  AsyncThunk
                sortIndex,
                searchValue,
            })
        )
    }, [category, searchValue, sortIndex, dispatch])

    useEffect(() => {
        getData()
    }, [category, sortIndex, searchValue, getData])

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

                {status === 'error' ? (
                    <div>ошибка</div>
                ) : (
                    <div className="content__inner">
                        {status === 'loading'
                            ? [...new Array(4)].map((_, index) => (
                                  <Skeleton key={index} />
                              ))
                            : data.map((pizza) => (
                                  <PizzaCard key={pizza.id} {...pizza} />
                              ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Content
