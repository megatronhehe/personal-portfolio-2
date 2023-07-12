import React from "react";

import defaultImg from "../assets/default-img.png";

import { LuFileCode, LuPlay } from "react-icons/lu";

const ProjectCard = ({ title, description }) => {
	return (
		<div className="relative w-full p-4 mb-4 text-gray-700 bg-gray-700 rounded-xl">
			<div className="flex items-center gap-2">
				<img src={defaultImg} alt="" className=" rounded-2xl" />
			</div>

			<div>
				<h1 className="my-3 text-base font-semibold text-green-400 ">
					{title}
				</h1>
				<p className="text-gray-300">{description}</p>
			</div>

			<div className="mt-4 text-green-400">
				<p>Technologies Used : </p>
				<ul className="flex gap-2 mt-2">
					<li className="p-2 bg-gray-800 rounded-lg">React JS</li>
					<li className="p-2 bg-gray-800 rounded-lg">Tailwind CSS</li>
				</ul>
			</div>

			<ul className="absolute flex gap-2 p-2 text-2xl bg-gray-700 top-2 left-2 rounded-xl">
				<li className="p-2 bg-green-400 rounded-md">
					<LuPlay />
				</li>
				<li className="p-2 bg-green-400 rounded-md">
					<LuFileCode />
				</li>
			</ul>
		</div>
	);
};

export default ProjectCard;
