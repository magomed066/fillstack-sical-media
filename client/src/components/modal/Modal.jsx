import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Modal as ModalEl, Typography } from '@mui/material'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../slices/modal'
import FileBase64 from 'react-file-base64'
import FormPost from '../form-post/FormPost'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	maxWidth: 900,
	bgcolor: 'background.paper',
	borderRadius: '5px',
	boxShadow: 24,
	p: 4,
	['@media (max-width: 500px)']: {
		width: 300,
	},
}

const btnAdd = {
	marginTop: '30px',
}

const stepper = {
	marginTop: '30px',
}

const img = {
	height: 600,
	objectFit: 'cover',
}

const imgWrap = {
	width: '100%',
	overflow: 'hidden',
	overflowX: 'scroll',
	overflowY: 'scroll',

	['@media (max-width: 400px)']: {
		width: 300,
		height: 400,
	},
}

const preview = {
	height: 300,
}

const Modal = () => {
	const [step, setStep] = useState(0)
	const { isOpen } = useSelector((state) => state.modal)
	const dispatch = useDispatch()
	const [image, setImage] = useState('')

	useEffect(() => {
		setStep(0)
		setImage('')
	}, [isOpen])

	const next = () => {
		if (step < 3) {
			setStep((prev) => ++prev)
		} else {
			return
		}
	}

	const prev = () => {
		if (step > 0) {
			setStep((prev) => --prev)
		} else {
			return
		}
	}

	return (
		<div>
			<ModalEl open={isOpen} onClose={() => dispatch(closeModal())}>
				<Box sx={{ ...style }}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Create new post
					</Typography>
					{/* <Stepper style={stepper} activeStep={step} /> */}

					{step === 0 && (
						<Button
							variant="contained"
							component="label"
							sx={{ ...btnAdd }}
							fullWidth
						>
							<FileBase64
								onDone={({ base64 }) => {
									setImage(base64)
									setStep((prev) => ++prev)
								}}
							/>
						</Button>
					)}

					{step === 1 && (
						<Grid container mt={4} justifyContent={'space-between'}>
							<Grid item xs={12} sm={12} md={12} sx={{ ...imgWrap }}>
								{image.length ? (
									<img src={image} alt="preview" style={{ ...img }} />
								) : (
									<img
										src={
											'https://pauple.com/wp-content/uploads/2016/06/preview-icon-1.png'
										}
										alt="preview"
										style={{ ...preview }}
									/>
								)}
							</Grid>
						</Grid>
					)}

					{step === 2 && (
						<Grid container mt={4}>
							<Grid item>
								<FormPost />
							</Grid>
						</Grid>
					)}

					{step > 0 && (
						<Button
							variant="contained"
							color="error"
							sx={{ marginLeft: 'auto', mt: '30px' }}
						>
							Cancel
						</Button>
					)}

					{step > 1 && (
						<Button
							variant="text"
							component="label"
							onClick={prev}
							sx={{ marginRight: 'auto', mt: '30px' }}
						>
							Back
						</Button>
					)}
					{step >= 1 && step < 2 ? (
						<Button
							variant="text"
							component="label"
							onClick={next}
							sx={{ marginRight: 'auto', mt: '30px' }}
						>
							Next
						</Button>
					) : null}
				</Box>
			</ModalEl>
		</div>
	)
}

const modal = document.getElementById('modal')

const ModalComp = () => {
	return ReactDOM.createPortal(<Modal />, modal)
}

export default ModalComp
