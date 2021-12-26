import { Col, Row } from 'antd'
import React from 'react'
import { Post, Sidebar } from '../../components'

import classes from './feed.module.scss'

const Feed = () => {
	return (
		<>
			<Row className={classes.feed}>
				<Col span={9} offset={5}>
					<Post />
				</Col>
				<Col span={4} offset={1}>
					<Sidebar />
				</Col>
			</Row>
		</>
	)
}

export default Feed
