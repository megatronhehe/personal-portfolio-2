import React, { useState } from "react";

import satya from "../assets/satyajpg.jpg";

import {
	PiDiamondsFourFill,
	PiLinkedinLogoFill,
	PiGithubLogoFill,
} from "react-icons/pi";

const Home = () => {
	return (
		<div className="my-40 text-2xl text-red-400 sm:m-0 sm:h-screen sm:flex sm:items-center sm:gap-4">
			<div className="sm:w-1/3">
				<h1 className="ml-20 text-base text-gray-400 sm:ml-0">Hi, I'm</h1>
				<div className="w-full p-4 my-4 bg-gray-700 border-l-4 border-red-400 rounded-r-xl">
					<h1 className="tracking-wide">Satya Mahendra</h1>
					<div className="flex items-center justify-center gap-2 text-sm text-blue-400">
						<PiDiamondsFourFill />
						<p className="">
							Frontend{" "}
							<span className="font-semibold text-blue-300">React</span> Web
							Developer
						</p>
					</div>
				</div>
			</div>

			<img
				src={satya}
				alt="satya"
				className="border-2 border-red-400 sm:w-1/3 rounded-2xl"
			/>

			<div className="flex flex-col justify-between w-full p-4 my-4 text-sm text-gray-300 bg-gray-700 sm:w-1/3 rounded-xl">
				<p className="flex items-center justify-center gap-2">
					A passionate frontend React web developer passionate on building
					interactive and responsive web app.
				</p>

				<p className="text-red-400 text-end">. . nice to meet you</p>
				<div className="flex items-end justify-between mt-4">
					<ul className="flex gap-2 text-4xl">
						<li className="text-blue-400">
							<PiLinkedinLogoFill />
						</li>
						<li className="text-blue-400">
							<PiGithubLogoFill />
						</li>
					</ul>
					<button className="p-2 font-semibold text-gray-700 bg-red-400 rounded-lg">
						résumé
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
