import React, { useState } from "react";
import { motion } from "framer-motion";

import { VscHome, VscAccount, VscLayers, VscMail } from "react-icons/vsc";
import { PiDiamondsFourFill } from "react-icons/pi";

const Navbar2 = () => {
	const handleClickScroll = (section) => {
		const element = document
			.getElementById(section)
			.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="fixed top-0 left-0 z-50 invisible text-4xl text-red-400 lg:visible">
			<ul className="flex flex-col items-center justify-center h-screen gap-12 px-4 pb-24 bg-gray-700 opacity-90 ">
				<li className="flex flex-col items-center text-base text-gray-500 ">
					<PiDiamondsFourFill />
				</li>
				<motion.li
					whileHover={{ scale: 1.1 }}
					onClick={() => handleClickScroll("home")}
					className="flex flex-col items-center w-16 h-16 p-3 rounded-full hover:bg-gray-600"
				>
					<VscHome />
					<p className="text-xs">home</p>
				</motion.li>
				<motion.li
					whileHover={{ scale: 1.1 }}
					onClick={() => handleClickScroll("about")}
					className="flex flex-col items-center w-16 h-16 p-3 text-blue-400 rounded-full hover:bg-gray-600"
				>
					<VscAccount />
					<p className="text-xs">about</p>
				</motion.li>
				<motion.li
					whileHover={{ scale: 1.1 }}
					onClick={() => handleClickScroll("projects")}
					className="flex flex-col items-center w-16 h-16 p-3 text-green-400 rounded-full hover:bg-gray-600"
				>
					<VscLayers />
					<p className="text-xs">projects</p>
				</motion.li>
				<motion.li
					whileHover={{ scale: 1.1 }}
					onClick={() => handleClickScroll("contact")}
					className="flex flex-col items-center w-16 h-16 p-3 text-purple-400 rounded-full hover:bg-gray-600"
				>
					<VscMail />
					<p className="text-xs">contact</p>
				</motion.li>
				<li className="flex flex-col items-center text-base text-gray-500">
					<PiDiamondsFourFill />
				</li>
			</ul>
		</div>
	);
};

export default Navbar2;
