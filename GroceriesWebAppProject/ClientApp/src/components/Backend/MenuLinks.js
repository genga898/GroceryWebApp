import {UserOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import React ,{Component}from "react";

export class MenuLinks extends Component {
	static displayName = MenuLinks.name
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="flex flex-col justify-between">
				<Menu theme={"dark"}
				      mode="inline"
				      defaultSelectedKeys={window.location.pathname}
				      items={[
					      {
						      key: '1',
						      icon: <UserOutlined/>,
						      label: 'User Menu'
					      },
					      {
						      key: '2',
						      icon: <UserOutlined/>,
						      label: 'User Menu'
					      },
					      {
						      key: '3',
						      icon: <UserOutlined/>,
						      label: 'User Menu'
					      },
				      ]}
				/>
			</div>
			
		)
	}
}
