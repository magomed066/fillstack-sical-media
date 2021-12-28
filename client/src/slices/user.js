import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import AuthService from '../services/auth.service'
import { setMessage } from './message'

const user = JSON.parse(localStorage.getItem('user'))

export const register = createAsyncThunk(
	'user/register',
	async (user, thunkAPI) => {
		try {
			const { data } = await AuthService.register(user)
			thunkAPI.dispatch(setMessage(data.message))
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()

			thunkAPI.dispatch(setMessage(message))

			return thunkAPI.rejectWithValue()
		}
	},
)

export const login = createAsyncThunk(
	'user/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const data = await AuthService.login(email, password)

			return { user: data }
		} catch (err) {
			const message =
				(err.response && err.response.data && err.response.data.message) ||
				err.message ||
				err.toString()

			thunkAPI.dispatch(setMessage(message))

			return thunkAPI.rejectWithValue()
		}
	},
)

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
})

const initialState = {
	loading: false,
	error: false,
	isLoggedIn: user ? true : false,
	user: user ? user : null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: {
		//Login
		[login.pending]: (state) => {
			state.loading = true
		},
		[login.fulfilled]: (state, action) => {
			state.loading = false
			state.user = action.payload.user
			state.isLoggedIn = true
		},
		[login.rejected]: (state) => {
			state.loading = false
			state.user = null
			state.error = true
			state.isLoggedIn = false
		},
		//Register
		[register.pending]: (state) => {
			state.loading = true
		},
		[register.fulfilled]: (state, action) => {
			state.loading = false
			state.user = action.payload
			state.isLoggedIn = false
		},
		[register.rejected]: (state) => {
			state.loading = false
			state.user = null
			state.isLoggedIn = false
			state.error = true
		},
	},
})

export const { userLoginFetching, userLoginSuccess, userLoginFailed } =
	userSlice.actions

export default userSlice.reducer
