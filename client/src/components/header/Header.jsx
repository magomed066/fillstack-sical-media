import React, { useState } from 'react'
import {
	AppBar,
	Box,
	IconButton,
	Menu,
	MenuItem,
	Typography,
	Toolbar,
} from '@mui/material'
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { logout } from '../../slices/user'
import { useNavigate } from 'react-router-dom'

const Header = () => {
	const [anchorEl, setAnchorEl] = useState(null)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						ReShare
					</Typography>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleMenu}
						color="inherit"
					>
						<AccountCircle />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<MenuItem onClick={handleClose}>Profile</MenuItem>
						<MenuItem onClick={handleClose}>My account</MenuItem>
						<MenuItem
							onClick={() => {
								handleClose()
								dispatch(logout())

								navigate('/', { replace: true })
							}}
						>
							Logout
						</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Header
