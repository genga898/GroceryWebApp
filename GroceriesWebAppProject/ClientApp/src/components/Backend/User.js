import React, {Component} from 'react';
import{Table, Button} from 'antd';
import {PlusOutlined} from "@ant-design/icons";


const dataSource = [
	{
		key: '1',
		name: 'Mike',
		age: 32,
		address: '10 Downing Street',
	},
	{
		key: '2',
		name: 'John',
		age: 42,
		address: '10 Downing Street',
	},
	{
		key: '3',
		name: 'Mike',
		age: 32,
		address: '10 Downing Street',
	},
	{
		key: '4',
		name: 'John',
		age: 42,
		address: '10 Downing Street',
	},
	{
		key: '5',
		name: 'Mike',
		age: 32,
		address: '10 Downing Street',
	},
	{
		key: '6',
		name: 'John',
		age: 42,
		address: '10 Downing Street',
	},
	{
		key: '7',
		name: 'Mike',
		age: 32,
		address: '10 Downing Street',
	},
	{
		key: '8',
		name: 'John',
		age: 42,
		address: '10 Downing Street',
	},
];

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
	},
];


{/*Products Page*/}
export class User extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="">
				<div className="mb-4">
					<Button type="text" className="flex items-center p-4 bg-green-400 hover:border-gray-300 hover:bg-[#297631]/90">
						<PlusOutlined/> Create User
					</Button>
				</div>
				<Table columns={columns} dataSource={dataSource}/>
			</div>
		)
	}
}