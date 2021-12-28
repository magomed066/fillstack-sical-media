import React from 'react'
import { Header, ModalComp } from '../../components'

import { Outlet } from 'react-router-dom'

const Main = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Outlet />
			</main>
			<ModalComp />
		</>
	)
}

export default Main
