import React from 'react'
import { Post, Sidebar } from '../../components'
import { Grid } from '@mui/material'

const Feed = () => {
	return (
		<Grid container justifyContent="center" mt={2} spacing={2}>
			<Grid item xs={12} sm={5} md={5}>
				<Post />
			</Grid>
			<Grid item xs={false} sm={false} md={4}>
				<Sidebar />
			</Grid>
		</Grid>
	)
}

export default Feed
