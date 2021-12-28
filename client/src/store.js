import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user'
import messageReducer from './slices/message'

import modalReducer from './slices/modal'

const reducer = {
	user: userReducer,
	message: messageReducer,
	modal: modalReducer,
}

const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV !== 'production',
})

export default store
