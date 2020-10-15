import React from 'react'
import Header from './Header'
import {
  BrowserRouter as Router, 
  Route
} from 'react-router-dom'

const home = () => {
  return <h1>home</h1>
}

const generos = () => {
  return <h1>generos</h1>
}

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={home} />
        <Route path='/generos' component={generos} />
      </div>
    </Router>
  )
}

export default App
