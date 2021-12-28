import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isOpen: false,
}

const messageSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openModal: (state) => {
			state.isOpen = true
		},
		closeModal: () => {
			return { isOpen: false }
		},
	},
})

const { reducer, actions } = messageSlice

export const { openModal, closeModal } = actions

export default reducer
