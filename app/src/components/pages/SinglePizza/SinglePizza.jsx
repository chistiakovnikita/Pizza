import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

import './singlePizza.scss'
import { useEffect } from 'react'

const SinglePizza = () => {
    const [pizza, setPizza] = useState()
    const params = useParams()

    useEffect(() => {
        const getPizza = async () => {
            try {
                const response = await axios.get(
                    'https://6457bacd0c15cb14820f9c6c.mockapi.io/pizzas/' +
                        params.id
                )
                setPizza(response.data)
            } catch (error) {
                alert('произошла ошибка')
            }
        }
        getPizza()
    }, [params.id])

    if (!pizza) {
        return <h2>Загрузкa...</h2>
    }

    return (
        <section className="single-pizza">
            <div className="container">
                <div className="single-pizza__inner">
                    <img src={pizza.img} alt="pic" />
                    <div className='single-pizza__description'>
                        <h2 className="single-pizza__title">{pizza.title}</h2>
                        <p className='single-pizza__text'>{pizza.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SinglePizza
