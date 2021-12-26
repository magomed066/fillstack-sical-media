import { Button, Dropdown, Menu } from 'antd'
import React from 'react'

const menu = (
	<Menu>
		<Menu.Item>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.antgroup.com"
			>
				Profile
			</a>
		</Menu.Item>

		<Menu.Item>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.aliyun.com"
			>
				Logout
			</a>
		</Menu.Item>
	</Menu>
)

const DropdownEl = () => {
	return (
		<Dropdown overlay={menu} placement="bottomRight" arrow>
			<Button type="dashed">Details</Button>
		</Dropdown>
	)
}

export default DropdownEl
