import React from 'react'
import { Post, Sidebar } from '../../components'
import { Grid } from '@mui/material'

const Feed = () => {
	return (
		<Grid container justifyContent="center" mt={2} spacing={2}>
			<Grid item xs={12} sm={5} md={5}>
				<Post />
			</Grid>
			<Grid item xs={12} sm={4} md={3}>
				<Sidebar />
			</Grid>
		</Grid>
	)
}

export default Feed
