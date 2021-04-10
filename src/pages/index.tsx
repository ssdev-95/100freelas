import React, {useState} from 'react'
import Header from '../components/MainHeader'
import Card from '../components/Card'
import AddJob from '../components/Modals/Create'
import EditJob from '../components/Modals/Edit'
import DeleteJob from '../components/Modals/Delete'

export default function Home() {
  const [addJobModalOpen, setAddJobModalOpen] = useState(false)
  const [editJobModalOpen, setEditJobModalOpen] = useState(false)
  const [deleteJobModalOpen, setDeleteJobModalOpen] = useState(false)

  return (
    <div>
      {
        addJobModalOpen && <AddJob />
      }
      {
        editJobModalOpen && <EditJob />
      }
      {
        deleteJobModalOpen && <DeleteJob />
      }
      <Header/>
      <div className="jobsContainer">
        <a className="filter" href="#">filter &gt;&gt;</a>
        <Card job={{id: 1, name:'Freedelicias', price:'$ 3500,00', remainingDays: 2}} />
      </div>
    </div>
  )
}
