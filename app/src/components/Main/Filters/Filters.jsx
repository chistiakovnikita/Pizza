import Sort from '../Sort'
import './filters.scss'

const Filters = (props) => {
    const { categoryIndex, setCategoryIndex, sortIndex, setSortIndex } = props

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
                                onClick={() => setCategoryIndex(index)}
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

                    <Sort sortIndex={sortIndex} setSortIndex={setSortIndex} />
                </div>
            </div>
        </section>
    )
}

export default Filters
