import React, { useContext } from 'react'

import Header from '../components/MainHeader'
import Card from '../components/Card'
import AddJob from '../components/Modals/Create'
import EditJob from '../components/Modals/Edit'
import DeleteJob from '../components/Modals/Delete'

import { CreateContext } from '../contexts/CreateContext'
import { EditContext } from '../contexts/EditContext'
import { DeleteContext } from '../contexts/DeleteContext'
import { FreelasContext } from '../contexts/Freelas'
import { SliderContext }  from '../contexts/SliderContext'

import colors from '../styles/colors.json'

export default function Home() {
	const { createJobModalOpen } = useContext(CreateContext)
	const { editJobModalOpen } = useContext(EditContext)
	const { deleteJobModalOpen } = useContext(DeleteContext)

	const { theme } = useContext(SliderContext)

	const bg = theme === 'light' ? colors.light['background'] : colors.dark['background']

	const { freelas } = useContext(FreelasContext)

	return (
		<div className="content" style={{background: bg}}>
			{ createJobModalOpen && <AddJob />}
			{ editJobModalOpen && <EditJob />}
			{ deleteJobModalOpen && <DeleteJob />}
			<Header />
			<div className="jobsContainer">
				<a className="filter" href="#">filter &gt;&gt;</a>
				{
					freelas.length>0&&freelas.map(job => <Card key={job.id} index={freelas.indexOf(job)} job={job} />)
				}
			</div>
		</div>
	)
}
