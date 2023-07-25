import React, { useState } from "react";

import {
	LuFileCode,
	LuPlay,
	LuChevronLeft,
	LuChevronRight,
} from "react-icons/lu";

const ProjectCard = ({ title, description, image }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const imageArray = image;
	const nextImage = () => {
		setCurrentImageIndex((prev) =>
			prev !== imageArray.length - 1 ? prev + 1 : 0
		);
	};

	const prevImage = () => {
		setCurrentImageIndex((prev) =>
			prev > 0 ? prev - 1 : imageArray.length - 1
		);
	};

	return (
		<div className="w-full gap-4 pb-16 my-16 text-gray-700 border-b border-gray-500 sm:h-80 sm:flex">
			<div className="relative flex flex-col items-center justify-center sm:w-2/4">
				<img
					src={imageArray[currentImageIndex]}
					alt=""
					className="object-contain w-full h-80 rounded-2xl"
				/>
				<div className="absolute bottom-0 flex justify-between w-full h-full gap-4 p-2 text-xl text-white">
					<button
						onClick={prevImage}
						className="self-center p-2 text-2xl bg-gray-600 rounded-full bg-opacity-20 hover:bg-opacity-70"
					>
						<LuChevronLeft />
					</button>
					<p className="self-end px-4 py-1 text-xs font-semibold tracking-widest bg-gray-500 bg-opacity-50 rounded-full shadow-lg">
						{currentImageIndex + 1}/{imageArray.length}
					</p>
					<button
						onClick={nextImage}
						className="self-center p-2 text-2xl bg-gray-600 rounded-full bg-opacity-20 hover:bg-opacity-70"
					>
						<LuChevronRight />
					</button>
				</div>
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
					<li className="p-2 bg-green-400 rounded-md">
						<LuPlay />
					</li>
					<li className="p-2 bg-green-400 rounded-md">
						<LuFileCode />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProjectCard;
