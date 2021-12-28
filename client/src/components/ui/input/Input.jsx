import React from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment } from '@mui/material'
import { Grid, TextField } from '@mui/material'

const Input = ({
	half,
	name,
	id,
	label,
	value,
	type = 'text',
	onChange,
	onBlur,
	focus,
	togglePassword,
	error = false,
	helperText,
}) => {
	return (
		<Grid item xs={12} sm={half ? 6 : 12}>
			<TextField
				fullWidth
				required
				name={name}
				error={error}
				helperText={helperText}
				autoFocus={focus}
				id={id}
				value={value}
				label={label}
				type={type}
				variant="outlined"
				onChange={onChange}
				onBlur={onBlur}
				InputProps={
					name === 'password'
						? {
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={togglePassword}>
											{type === 'password' ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								),
						  }
						: null
				}
			/>
		</Grid>
	)
}

export default Input
