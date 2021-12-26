import React, { useState } from 'react'
import { Button, PageHeader, Switch } from 'antd'
import classes from './header.module.scss'
import { DropdownEl } from '../'

const Header = () => {
	const [theme, setTheme] = useState('dark')

	const changeTheme = () =>
		setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

	return (
		<>
			<PageHeader
				title="ReShare"
				className={classes.header}
				theme={theme}
				extra={[
					<Button key="btnAdd" type="link">
						Add post
					</Button>,
					<Button key="btnOpen" type="link">
						Saved posts
					</Button>,
					<DropdownEl key="drop" />,
					<Switch
						key="switch"
						onChange={changeTheme}
						checked={theme === 'dark'}
						checkedChildren="dark"
						unCheckedChildren="light"
						style={{ marginLeft: '20px' }}
					/>,
				]}
			></PageHeader>
		</>
	)
}

export default Header
