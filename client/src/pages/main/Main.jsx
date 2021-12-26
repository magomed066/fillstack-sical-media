import React from 'react'
import { Header } from '../../components'

import { Outlet } from 'react-router-dom'

const Main = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Outlet />
			</main>
		</>
	)
}

export default Main
