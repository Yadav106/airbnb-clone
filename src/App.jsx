import React from 'react'
import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import data from './data'

function App() {
  const cards = data.map(x => {
    return (
      <Card 
        key={x.id}
        img={x.coverImg}
        stars={x.stats.rating}
        rcount={x.stats.reviewCount}
        location={x.location}
        title={x.title}
        price={x.price}
        openSpots={x.openSpots}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='cards--list'>
        {cards}
      </div>
    </div>
  )
}

export default App