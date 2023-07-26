import React, { useState } from "react";

import ImageModal from "./ImageModal";

import { PiDiamondsFourFill } from "react-icons/pi";
import { LuFileCode, LuPlay, LuImage } from "react-icons/lu";

const ProjectCard = ({ title, description, image, logo, index }) => {
	const [toggleModal, setToggleModal] = useState(false);
	const [isMouseEnter, setIsMouseEnter] = useState(false);

	const mouseEnter = () => {
		setIsMouseEnter(true);
	};
	const mouseLeave = () => {
		setIsMouseEnter(false);
	};

	return (
		<>
			<div
				onMouseEnter={mouseEnter}
				onMouseLeave={mouseLeave}
				className="relative mb-4 md:mb-0"
			>
				<img src={logo} alt="" className="w-full" />
				{isMouseEnter && (
					<div className="absolute top-0 flex flex-col justify-around w-full h-full p-4 text-gray-200 bg-gray-700 bg-opacity-50 sm:p-8 backdrop-filter backdrop-blur-sm ">
						<h2 className="font-semibold tracking-wide text-center">{title}</h2>
						<p className="text-xs ">{description}</p>

						<div className="flex justify-between">
							<div className="flex flex-col w-2/3">
								<p className="mb-4 font-semibold">Technologies used</p>
								<ul className="text-xs">
									<li>HTML</li>
									<li>CSS</li>
									<li>JavaScript</li>
									<li>React JS</li>
									<li>Tailwind CSS</li>
								</ul>
							</div>

							<div className="flex flex-col justify-end pl-4">
								<p className="self-center mb-4 font-semibold">Try it out!</p>
								<ul className="flex flex-col gap-2 text-xs">
									<li
										onClick={() => setToggleModal(true)}
										className="flex items-center gap-2"
									>
										<LuImage className="p-2 text-4xl text-gray-400 bg-gray-200 rounded-full" />
										<p>Image Preview</p>
									</li>
									<li className="flex items-center gap-2">
										<LuPlay className="p-2 text-4xl text-white bg-red-400 rounded-full" />
										<p>Live Demo</p>
									</li>
									<li className="flex items-center gap-2">
										<LuFileCode className="p-2 text-4xl text-gray-200 bg-blue-400 rounded-full" />
										<p>Source Code</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				)}
			</div>

			{toggleModal && (
				<ImageModal setToggleModal={setToggleModal} image={image} />
			)}
		</>
	);
};

export default ProjectCard;
