import React from 'react'

import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	Typography,
} from '@mui/material'
import { red } from '@mui/material/colors'
import {
	MoreVert,
	BookmarkAddOutlined,
	FavoriteBorder,
	Comment,
} from '@mui/icons-material'

const Post = () => {
	return (
		<Card>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: red[500] }} aria-label="User">
						M
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVert />
					</IconButton>
				}
				title="m.mamergov"
			/>
			<CardMedia
				component="img"
				image="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
				alt="nature"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					<strong style={{ color: '#000' }}>m.mamerov </strong>
					This impressive paella is a perfect party dish and a fun meal to cook
					together with your guests. Add 1 cup of frozen peas along with the
					mussels, if you like.
				</Typography>

				<Typography
					variant="body2"
					color="text.secondary"
					style={{ marginTop: '20px', color: '#00376b' }}
				>
					#nature#travel#travelling
				</Typography>
			</CardContent>

			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteBorder style={{ color: '#000' }} />
				</IconButton>
				<IconButton aria-label="share">
					<Comment style={{ color: '#000' }} />
				</IconButton>
				<IconButton aria-label="share" style={{ marginLeft: 'auto' }}>
					<BookmarkAddOutlined style={{ color: '#000' }} />
				</IconButton>
			</CardActions>
		</Card>
	)
}

export default Post
