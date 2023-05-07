import Header from './components/Header'
import Content from './components/Main/Content'
import Filters from './components/Main/Filters'

import './scss/App.scss'

function App() {
    return (
        <div className="App">
            <Header />
            <Filters />
            <Content />
        </div>
    )
}

export default App
