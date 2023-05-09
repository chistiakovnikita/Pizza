import { useState } from 'react'
import Content from '../../Main/Content'
import Filters from '../../Main/Filters'

const Home = (props) => {
    const {searchValue} = props
    const [categoryIndex, setCategoryIndex] = useState(0)
    const [sortIndex, setSortIndex] = useState({
        name: 'популярности',
        sort: 'rating',
    })
   

    console.log(sortIndex.sort)
    return (
        <main>
            <Filters
                categoryIndex={categoryIndex}
                setCategoryIndex={setCategoryIndex}
                sortIndex={sortIndex}
                setSortIndex={setSortIndex}
            />
            <Content searchValue={searchValue} categoryIndex={categoryIndex} sortIndex={sortIndex} />
        </main>
    )
}

export default Home
