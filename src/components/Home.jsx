import React, { useState, useEffect } from "react";

// import satya from "../assets/satyajpg.jpg";
import satya from "../assets/satyajpg2.jpg";

import { PiDiamondsFourFill } from "react-icons/pi";
import { ImProfile } from "react-icons/im";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Home = () => {
	useEffect(() => {
		const element = document.getElementById("home");
		element.scrollIntoView({ behavior: "smooth" });
	}, []);

	return (
		<div className="relative flex flex-col items-center justify-center h-screen gap-4 -mt-6 mb-80 sm:flex-row">
			<div className="flex flex-col items-center">
				<h1 className="text-4xl tracking-wide text-red-400 sm:mt-0">
					Satya Mahendra
				</h1>
				<p className="flex items-center gap-2 mb-4 text-blue-400">
					<PiDiamondsFourFill />
					Frontend <span className="font-bold text-blue-300">React</span> Web
					Developer
				</p>
				<img
					src={satya}
					alt="satya"
					className="w-3/4 border-2 border-red-400 rounded-full shadow-xl"
				/>
			</div>
			<div className="flex flex-col gap-4">
				<PiDiamondsFourFill className="self-center text-red-400" />
				<div className="flex flex-col p-4 border-red-400 border-y">
					<p className="mb-4 text-gray-300 ">
						A passionate frontend{" "}
						<span className="font-semibold text-blue-400">React</span> web
						developer passionate on building{" "}
						<span className="text-blue-400">interactive</span> and{" "}
						<span className="text-blue-400">responsive web app</span>.
					</p>
					<ul className="flex justify-between gap-2 text-2xl">
						<li className="flex gap-2">
							<div className="p-2 text-red-400 bg-gray-700 rounded-full">
								<FaLinkedin />
							</div>
							<div className="p-2 text-red-400 bg-gray-700 rounded-full">
								<FaGithub />
							</div>
						</li>

						<li className="flex items-center gap-2 p-2 font-semibold text-gray-700 bg-red-400 rounded-md">
							<p className="text-sm">résumé</p>
							<ImProfile />
						</li>
					</ul>
				</div>
				<PiDiamondsFourFill className="self-center text-red-400" />
			</div>
		</div>
	);
};

{
	/* <div className="my-40 text-2xl text-red-400 sm:m-0 sm:h-screen sm:flex sm:items-center sm:gap-4">
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
		</div> */
}

export default Home;
