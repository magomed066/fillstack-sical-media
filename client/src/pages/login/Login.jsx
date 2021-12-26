import React from 'react'
// import { Col, Row } from 'antd'
import { Grid, Typography } from '@mui/material'
import classes from './login.module.scss'
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
