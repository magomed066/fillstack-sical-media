import React from 'react'
import { Grid } from '@mui/material'
import { FormLogin } from '../../components'

const Login = () => {
	return (
		<Grid container justifyContent="center">
			<Grid item xs={12} sm={12} md={3}>
				<FormLogin />
			</Grid>
		</Grid>
	)
}

export default Login
