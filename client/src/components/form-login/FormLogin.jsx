import React, { useEffect, useState } from 'react'

import { Button, Box, Avatar, Grid, Alert } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import { Input } from '../'
import { useDispatch, useSelector } from 'react-redux'
import { login, register } from '../../slices/user'
import { clearMessage } from '../../slices/message'
import { useNavigate } from 'react-router-dom'

const FormLogin = () => {
	const [emailError, setEmailError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)
	const [isSignup, setIsSignup] = useState(false)
	const [showPassword, setShowPassword] = useState(false)

	const navigate = useNavigate()

	const { message } = useSelector((state) => state.message)
	const { loading, error } = useSelector((state) => state.user)

	const dispatch = useDispatch()

	const [data, setData] = useState({
		email: '',
		password: '',
		firstName: '',
		lastName: '',
	})

	useEffect(() => {
		clearMessage()
	}, [dispatch])

	const changeHandler = (e) => {
		setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const emailErrorHandler = (e) => {
		data.email.includes('@') ? setEmailError(false) : setEmailError(true)
	}
	const passwordErrorHandler = (e) => {
		data.password.length >= 6 ? setPasswordError(false) : setPasswordError(true)
	}

	const togglePassword = () => setShowPassword((prev) => !prev)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (isSignup) {
			dispatch(register(data))
		} else {
			dispatch(login({ email: data.email, password: data.password }))
			navigate('/feed', { replace: true })
		}
	}

	return (
		<Box
			sx={{
				marginTop: 8,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				width: '100%',
			}}
		>
			<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
				<LockOutlined />
			</Avatar>

			<Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
				{(error || message) && (
					<Alert severity={error ? 'error' : 'success'}>{message}</Alert>
				)}
				<Grid container spacing={2} mt={2}>
					{isSignup && (
						<>
							<Input
								type="firstName"
								label="First Name"
								name="firstName"
								focus
								half
								value={data.firstName}
								onChange={changeHandler}
							/>
							<Input
								type="lastName"
								label="Last Name"
								name="lastName"
								half
								value={data.lastName}
								onChange={changeHandler}
							/>
						</>
					)}
					<Input
						type="email"
						label="E-mail"
						name="email"
						value={data.email}
						onChange={changeHandler}
						onBlur={emailErrorHandler}
						error={emailError ? true : false}
						helperText={emailError ? 'Invalid email' : ''}
					/>
					<Input
						label="Password"
						name="password"
						type={showPassword ? 'text' : 'password'}
						togglePassword={togglePassword}
						value={data.password}
						onChange={changeHandler}
						onBlur={passwordErrorHandler}
						error={passwordError ? true : false}
						helperText={
							passwordError ? 'Password has to be at least 6 characters' : ''
						}
					/>
				</Grid>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
				>
					{loading ? 'Loading...' : isSignup ? 'Sign Up' : 'Sign In'}
				</Button>
				<Grid container justifyContent="flex-end">
					<Grid item>
						<Button onClick={() => setIsSignup((prev) => !prev)}>
							{isSignup
								? 'Already have an account? Sign in'
								: `Don't have an account? Sign up`}
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}

export default FormLogin
