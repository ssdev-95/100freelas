import React from 'react'
import Header from '../components/MainHeader'
import Card from '../components/Card'

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="jobsContainer">
        <Card job={{id: 1, name:'Freedelicias', price:'$ 3500,00', remainingDays: 2}} />
      </div>
    </div>
  )
}
