import React from 'react'
import { Card, Avatar } from 'antd'

import {
	EditOutlined,
	DeleteOutlined,
	BookOutlined,
	CommentOutlined,
	HeartOutlined,
} from '@ant-design/icons'
import Meta from 'antd/lib/card/Meta'

import classes from './post.module.scss'

const Post = () => {
	return (
		<Card
			title="m.mamergov"
			cover={
				<img
					alt="example"
					src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
				/>
			}
			actions={[
				<HeartOutlined key="like" />,
				<CommentOutlined key="comments" />,
				<EditOutlined key="edit" />,
				<DeleteOutlined key="ellipsis" />,
				<BookOutlined key="book" />,
			]}
		>
			<Meta
				avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
				title="Card title"
				description={
					<>
						<p className={classes['post__desc']}>
							<strong>m.mamergov </strong>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
							rerum fuga sapiente debitis, a non dolor optio consectetur facilis
							numquam soluta magni distinctio sed! Aliquam voluptas ea fuga
							accusantium deserunt?
						</p>

						<p className={classes['post__tags']}>#nature#travelling</p>
					</>
				}
			/>
		</Card>
	)
}

export default Post
