import React, {Component} from 'react';
import {Card, Breadcrumb, Table} from 'antd'

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


{/*admin dashboard*/}
export class Dashboard extends Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div className="">
				<div className="mb-2">
					<Breadcrumb
						items={[
							{
								title: 'Home',
							},
							{
								title: 'Dashboard',
							},
						]}
					/>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 place-items-center mb-8">
					<Card className="w-3/4 text-center bg-gray-200">
						<span className="text-3xl">0</span>
						<p className="text-sm md:text-2xl font-thin">Customers</p>
					</Card>
					<Card className="w-3/4 text-center bg-gray-200">
						<span className="text-3xl">0</span>
						<p className="text-sm md:text-2xl font-thin">Products</p>
					</Card>
					<Card className="w-3/4 text-center bg-gray-200">
						<span className="text-3xl">0</span>
						<p className="text-sm md:text-2xl font-thin">Orders</p>
					</Card>
					<Card className="w-3/4 text-center bg-gray-200">
						<span className="text-3xl">0</span>
						<p className="text-sm md:text-2xl font-thin">Sales</p>
					</Card>
				</div>
				<div className="gap-4">
					<Table columns={columns} dataSource={dataSource}/>
					<Table columns={columns} dataSource={dataSource}/>
					<Table columns={columns} dataSource={dataSource}/>
					<Table columns={columns} dataSource={dataSource}/>
				</div>
			</div>
		)
	}
}
