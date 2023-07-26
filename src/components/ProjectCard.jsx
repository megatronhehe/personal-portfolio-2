import React, { useState } from "react";

import ImageModal from "./ImageModal";

import { PiDiamondsFourFill } from "react-icons/pi";
import { LuFileCode, LuPlay, LuImage } from "react-icons/lu";

const ProjectCard = ({ title, description, image, logo, index }) => {
	const [toggleModal, setToggleModal] = useState(false);

	return (
		<>
			<p className="flex justify-center py-4 text-gray-600 border-b border-gray-600">
				<PiDiamondsFourFill />
			</p>
			<div
				className={`w-full gap-4 pb-16 my-16 text-gray-700 sm:h-80 sm:flex ${
					index % 2 === 1 ? "flex-row-reverse" : ""
				}`}
			>
				<div className="relative flex flex-col items-center justify-center sm:w-2/4">
					<img
						src={logo}
						alt=""
						className="object-contain w-full h-80 rounded-2xl"
					/>
				</div>

				<div className="flex flex-col justify-center py-4 sm:p-16 sm:w-2/4 rounded-xl">
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

					<div className="flex items-center self-end py-2 mt-2 text-center ">
						<ul className="flex flex-col gap-2 text-2xl ">
							<li
								onClick={() => setToggleModal(true)}
								className="flex items-center gap-2 px-2 py-1 text-gray-600 bg-gray-400 rounded-md jusity-center"
							>
								<LuImage />
								<p className="text-xs">preview image</p>
							</li>
							<li className="flex items-center gap-2 px-2 py-1 bg-red-400 rounded-md jusity-center">
								<LuPlay />
								<p className="text-xs">live demo</p>
							</li>
							<li className="flex items-center gap-2 px-2 py-1 bg-blue-400 rounded-md jusity-center">
								<LuFileCode />
								<p className="text-xs">source code</p>
							</li>
						</ul>
					</div>
				</div>

				{toggleModal && (
					<ImageModal setToggleModal={setToggleModal} image={image} />
				)}
			</div>
		</>
	);
};

export default ProjectCard;
