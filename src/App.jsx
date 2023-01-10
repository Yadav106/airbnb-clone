import React from 'react'
import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import data from './data'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {data.map(x => {
        return (
          <Card 
            img={x.coverImg}
            stars={x.stats.rating}
            rcount={x.stats.reviewCount}
            location={x.location}
            title={x.title}
            price={x.price}
          />
        )
      })}
    </div>
  )
}

export default App