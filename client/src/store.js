import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user'
import messageReducer from './slices/message'

const reducer = {
	user: userReducer,
	message: messageReducer,
}

const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV !== 'production',
})

export default store
