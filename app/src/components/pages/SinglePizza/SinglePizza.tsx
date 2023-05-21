import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

import './singlePizza.scss'
import { useEffect } from 'react'

const SinglePizza: React.FC = () => {
    const [pizza, setPizza] = useState<{
        img: string
        title: string
        description: string
    }>()
    const params = useParams()
    const navigate = useNavigate()

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
                navigate('/')
            }
        }
        getPizza()
    }, [params.id, navigate])

    if (!pizza) {
        return <h2>Загрузкa...</h2>
    }

    return (
        <section className="single-pizza">
            <div className="container">
                <div className="single-pizza__inner">
                    <img src={pizza.img} alt="pic" />
                    <div className="single-pizza__description">
                        <h2 className="single-pizza__title">{pizza.title}</h2>
                        <p className="single-pizza__text">
                            {pizza.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SinglePizza
