import React, { useState } from 'react'

import { Button, Box, Avatar, Grid } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import { Input } from '../'

const FormLogin = () => {
	const [isSignup, setIsSignup] = useState(false)
	const [showPassword, setShowPassword] = useState(false)

	const togglePassword = () => setShowPassword((prev) => !prev)

	const handleSubmit = (e) => {
		e.preventDefault()
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
				<Grid container spacing={2}>
					{isSignup && (
						<>
							<Input
								type="firstName"
								label="First Name"
								name="firstName"
								focus
								half
							/>
							<Input type="lastName" label="Last Name" name="lastName" half />
						</>
					)}
					<Input type="email" label="E-mail" name="email" />
					<Input
						label="Password"
						name="password"
						type={showPassword ? 'text' : 'password'}
						togglePassword={togglePassword}
					/>
				</Grid>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
				>
					{isSignup ? 'Sign Up' : ' Sign In'}
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
