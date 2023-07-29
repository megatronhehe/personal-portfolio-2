import React, { useState } from "react";

import ImageModal from "./ImageModal";

import { LuFileCode, LuPlay, LuImage } from "react-icons/lu";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const ProjectCard = ({ title, description, image, logo, sc, index }) => {
	const [toggleModal, setToggleModal] = useState(false);
	const [toggleInfo, setToggleInfo] = useState(false);

	return (
		<>
			<div className="relative mb-4 md:mb-0">
				<img src={logo} alt="" className="w-full" />
				<button
					onClick={() => setToggleInfo((prev) => !prev)}
					className="absolute z-10 flex items-center justify-center w-10 h-10 text-4xl text-gray-700 bg-white bg-opacity-50 rounded-md top-3 right-3"
				>
					{toggleInfo ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
				</button>
				{toggleInfo && (
					<div className="absolute top-0 flex flex-col justify-around w-full h-full p-4 text-gray-200 bg-gray-700 bg-opacity-50 sm:p-8 backdrop-filter backdrop-blur-sm ">
						<h2 className="font-semibold tracking-wide text-center">{title}</h2>
						<p className="text-xs ">{description}</p>

						<div className="flex justify-between">
							<div className="flex flex-col w-1/2">
								<p className="mb-4 font-semibold">Technologies used</p>
								<ul className="flex flex-col gap-2 text-xs">
									<li>HTML</li>
									<li>CSS</li>
									<li>JavaScript</li>
									<li>React JS</li>
									<li>Tailwind CSS</li>
								</ul>
							</div>

							<div className="flex flex-col items-center justify-center w-1/2 pl-4">
								<p className="self-center mb-4 font-semibold">Try it out!</p>
								<ul className="flex flex-col gap-2 text-xs">
									<li
										onClick={() => setToggleModal(true)}
										className="flex items-center gap-2 pr-2 rounded-full cursor-pointer hover:bg-gray-400 hover:bg-opacity-40"
									>
										<LuImage className="w-10 h-10 p-2 text-4xl text-gray-400 bg-gray-200 rounded-full" />
										<p>Image Preview</p>
									</li>
									<li className="flex items-center gap-2 rounded-full cursor-pointer hover:bg-gray-400 hover:bg-opacity-40">
										<LuPlay className="w-10 h-10 p-2 text-4xl text-white bg-red-400 rounded-full" />
										<p>Live Demo</p>
									</li>
									<a
										href={sc}
										target="_blank"
										className="flex items-center gap-2 rounded-full hover:bg-gray-400 hover:bg-opacity-40 "
									>
										<LuFileCode className="w-10 h-10 p-2 text-4xl text-gray-200 bg-blue-400 rounded-full " />
										<p>Source Code</p>
									</a>
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
