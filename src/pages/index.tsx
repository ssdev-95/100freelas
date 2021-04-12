import React, { useContext, useState, useEffect } from 'react'

import { FreelaController } from '../db/FreelanceController'

import Header from '../components/MainHeader'
import Card from '../components/Card'
import AddJob from '../components/Modals/Create'
import EditJob from '../components/Modals/Edit'
import DeleteJob from '../components/Modals/Delete'

import { CreateContext } from '../contexts/CreateContext'
import { EditContext } from '../contexts/EditContext'
import { DeleteContext } from '../contexts/DeleteContext'

export default function Home() {
	const { createJobModalOpen } = useContext(CreateContext)
	const { editJobModalOpen } = useContext(EditContext)
	const { deleteJobModalOpen } = useContext(DeleteContext)

	const [jobs, setJobs] = useState([])

	useEffect(() => {
		setJobs(FreelaController.getJobs())
	}, [])

	return (
		<div>
			{ createJobModalOpen && <AddJob />}
			{ editJobModalOpen && <EditJob />}
			{ deleteJobModalOpen && <DeleteJob />}
			<Header />
			<div className="jobsContainer">
				<a className="filter" href="#">filter &gt;&gt;</a>
				{
					jobs.map(job => <Card job={{ ...job, id: (jobs.indexOf(job) + 1) }} />)
				}
			</div>
		</div>
	)
}
