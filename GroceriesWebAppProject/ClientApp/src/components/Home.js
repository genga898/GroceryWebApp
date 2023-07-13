import React, { Component } from 'react';
import 'flowbite';
import '../css/styles.css';
import { Card } from 'flowbite-react';

export class Home extends Component {
	static displayName = Home.name;

	render() {
		return (
			<div>
				<section id={"background-image"} className={"container flex justify-center align-center font-bold font-mono text-2xl text-center"} >
					Fresh Groceries at your Doorstep<br/> Order Now.
				</section>
				<div className="container">
					<div className="flex justify-between p-2 mt-2">
						<p className="">Latest Purchases</p>
						<a className="">More></a>
					</div>
					<div className="mb-2 grid grid-cols-2 md:grid-cols-4">

						<div
							className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="p-2 rounded-t-lg" src="https://images.unsplash.com/photo-1653407814551-16370b2d18b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlJTIwd2F0Y2glMjA3fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
								     alt="product image"/>
							</a>
							<div className="px-5 pb-5">
								<a href="#">
									<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple
										Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
								</a>
								<div className="flex items-center mt-2.5 mb-5">
									<svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
									     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
										<path
											d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
									</svg>
									<svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
									     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
										<path
											d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
									</svg>
									<svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
									     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
										<path
											d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
									</svg>
									<svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
									     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
										<path
											d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
									</svg>
									<svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
									     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
										<path
											d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
									</svg>
									<span
										className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
									<a href="#"
									   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
										to cart</a>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div className="container">
					<div className="flex justify-between p-2 mt-2">
						<p className="Shop by Category"></p>
						<a className="More>"></a>
					</div>
					<div className="mt-2 grid grid-cols-2 md:grid-cols-4">

					</div>
				</div>
			</div>
			
		);
	}
}
