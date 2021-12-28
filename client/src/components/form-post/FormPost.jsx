import React, { useState } from 'react'

import { Button, Box, Grid } from '@mui/material'
import { Input } from '../'

const FormPost = () => {
	const [data, setData] = useState({
		desc: '',
		tags: '',
	})

	const changeHandler = (e) => {
		setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				width: '100%',
			}}
		>
			<Box component="form" onSubmit={handleSubmit}>
				{/* {(error || message) && (
					<Alert severity={error ? 'error' : 'success'}>{message}</Alert>
				)} */}
				<Grid container spacing={2}>
					<Input
						type="desc"
						label="Description"
						name="desc"
						value={data.desc}
						onChange={changeHandler}
					/>
					<Input
						label="Tags"
						name="tags"
						value={data.tags}
						onChange={changeHandler}
						placeholder="#smth#smth"
					/>
				</Grid>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
				>
					Share
				</Button>
			</Box>
		</Box>
	)
}

export default FormPost
