import React, { useState } from "react";
import { motion } from "framer-motion";

import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const ImageModal = ({ setToggleModal, image }) => {
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
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={() => setToggleModal(false)}
			className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen text-white bg-opacity-50 sm:p-24 backdrop-filter backdrop-blur-sm"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="relative flex items-center justify-center"
			>
				<div className="">
					<img
						className="object-contain "
						src={imageArray[currentImageIndex]}
						alt=""
					/>
				</div>
			</div>

			<div className="absolute left-2">
				<button
					onClick={(e) => {
						e.stopPropagation();
						prevImage();
					}}
					className="self-center p-2 text-2xl bg-gray-600 rounded-full bg-opacity-20 hover:bg-opacity-70"
				>
					<LuChevronLeft />
				</button>
			</div>
			<div className="absolute right-2">
				<button
					onClick={(e) => {
						e.stopPropagation();
						nextImage();
					}}
					className="self-center p-2 text-2xl bg-gray-600 rounded-full bg-opacity-20 hover:bg-opacity-70"
				>
					<LuChevronRight />
				</button>
			</div>

			<div className="absolute bottom-2">
				<p className="self-end w-24 px-4 py-1 text-xs font-semibold tracking-widest text-center bg-gray-500 bg-opacity-50 rounded-full shadow-lg">
					{currentImageIndex + 1}/{imageArray.length}
				</p>
			</div>
		</motion.div>
	);
};

export default ImageModal;
