import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
	VscThreeBars,
	VscHome,
	VscAccount,
	VscLayers,
	VscMail,
} from "react-icons/vsc";
import { PiDiamondsFourFill } from "react-icons/pi";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const handleClickScroll = (section) => {
		const element = document.getElementById(section);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setToggle(false);
		}
	};

	return (
		<div className="fixed bottom-0 left-0 z-50 text-2xl text-red-400 lg:invisible">
			<AnimatePresence>
				{toggle && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setToggle(false)}
						className="flex flex-col justify-end h-screen bg-opacity-80 backdrop-filter backdrop-blur-sm"
					>
						<motion.div
							initial={{ y: "100vh" }}
							animate={{ y: 0 }}
							exit={{ y: "100vh" }}
							transition={{ type: "tween", duration: 0.5 }}
							onClick={(e) => e.stopPropagation()}
							className="flex flex-col items-center gap-4 py-4 text-sm text-gray-500 bg-gray-700 rounded-t-2xl bg-opacity-80 backdrop-filter backdrop-blur-sm"
						>
							<PiDiamondsFourFill />
							<ul className="flex justify-around w-full text-4xl">
								<li
									onClick={() => handleClickScroll("home")}
									className="flex flex-col items-center w-16 h-16 p-2 text-red-400 rounded-full hover:bg-gray-600"
								>
									<VscHome />
									<p className="text-xs">home</p>
								</li>
								<li
									onClick={() => handleClickScroll("about")}
									className="flex flex-col items-center w-16 h-16 text-blue-400 rounded-full hover:bg-gray-600"
								>
									<VscAccount />
									<p className="text-xs">about</p>
								</li>
							</ul>
							<ul className="flex justify-around w-full text-4xl">
								<li
									onClick={() => handleClickScroll("projects")}
									className="flex flex-col items-center w-16 h-16 text-green-400 rounded-full hover:bg-gray-600"
								>
									<VscLayers />
									<p className="text-xs">projects</p>
								</li>
								<li
									onClick={() => handleClickScroll("contact")}
									className="flex flex-col items-center w-16 h-16 text-purple-400 rounded-full hover:bg-gray-600"
								>
									<VscMail />
									<p className="text-xs">contact</p>
								</li>
							</ul>
							<PiDiamondsFourFill />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
			<div className="flex justify-between w-screen px-8 py-4 bg-gray-700 bg-opacity-80 backdrop-filter backdrop-blur-sm">
				<h1
					onClick={() => handleClickScroll("home")}
					className="text-base text-gray-400"
				>
					satya.<span className="font-bold text-red-400">dev</span>
				</h1>
				<button onClick={() => setToggle((prev) => !prev)} className="">
					<VscThreeBars />
				</button>
			</div>
		</div>
	);
};

export default Navbar;
