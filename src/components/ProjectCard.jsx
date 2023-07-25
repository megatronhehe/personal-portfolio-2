import React, { useState } from "react";

import { LuFileCode, LuPlay } from "react-icons/lu";

const ProjectCard = ({ title, description, image }) => {
	const imageArray = image;

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const nextImage = () => {
		setCurrentImageIndex((prev) =>
			prev !== imageArray.length - 1 ? prev + 1 : setCurrentImageIndex(0)
		);
	};

	const prevImage = () => {
		setCurrentImageIndex((prev) =>
			prev > 0 ? prev - 1 : setCurrentImageIndex(imageArray.length - 1)
		);
	};

	return (
		<div className="w-full gap-4 pb-8 my-8 text-gray-700 border-b border-gray-500 sm:flex">
			<div className="relative flex flex-col items-center justify-center sm:w-2/4">
				<img
					src={imageArray[currentImageIndex]}
					alt=""
					className="rounded-2xl"
				/>
				<div className="absolute bottom-0 flex justify-between w-full h-full gap-4 p-2 text-xl">
					<button onClick={prevImage}>{"<"}</button>
					<p className="self-end text-sm">
						{currentImageIndex + 1}/{imageArray.length}
					</p>
					<button onClick={nextImage}>{">"}</button>
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
