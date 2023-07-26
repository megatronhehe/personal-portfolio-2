import React, { useState } from "react";

import ImageModal from "./ImageModal";

import { LuFileCode, LuPlay, LuImage } from "react-icons/lu";

const ProjectCard = ({ title, description, image, logo }) => {
	const [toggleModal, setToggleModal] = useState(false);

	return (
		<div className="w-full gap-4 pb-16 my-16 text-gray-700 border-b border-gray-500 sm:h-80 sm:flex">
			<div className="relative flex flex-col items-center justify-center sm:w-2/4">
				<img
					src={logo}
					alt=""
					className="object-contain w-full h-80 rounded-2xl"
				/>
			</div>

			<div className="relative flex flex-col justify-center py-4 sm:p-8 sm:w-2/4 rounded-xl">
				<h1 className="my-3 text-base font-semibold text-green-400 ">
					{title}
				</h1>
				<p className="text-gray-300">{description}</p>

				<div className="mt-4 text-green-400">
					<p>Technologies Used : </p>
					<ul className="flex gap-2 mt-2">
						<li className="p-2 bg-gray-700 rounded-lg">React JS</li>
						<li className="p-2 bg-gray-700 rounded-lg">Tailwind CSS</li>
					</ul>
				</div>

				<ul className="absolute bottom-0 right-0 flex gap-2 p-2 text-2xl rounded-xl">
					<li
						onClick={() => setToggleModal(true)}
						className="p-2 bg-green-400 rounded-md"
					>
						<LuImage />
					</li>
					<li className="p-2 bg-green-400 rounded-md">
						<LuPlay />
					</li>
					<li className="p-2 bg-green-400 rounded-md">
						<LuFileCode />
					</li>
				</ul>
			</div>

			{toggleModal && (
				<ImageModal setToggleModal={setToggleModal} image={image} />
			)}
		</div>
	);
};

export default ProjectCard;
