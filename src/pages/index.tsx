import React from 'react'
import Header from '../components/MainHeader'
import Card from '../components/Card'

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="jobsContainer">
        <a className="filter" href="#">filter &gt;&gt;</a>
        <Card job={{id: 1, name:'Freedelicias', price:'$ 3500,00', remainingDays: 2}} />
      </div>
    </div>
  )
}
