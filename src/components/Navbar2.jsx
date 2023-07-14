import React, { useState } from "react";

import { VscHome, VscAccount, VscLayers, VscMail } from "react-icons/vsc";
import { PiDiamondsFourFill } from "react-icons/pi";

const Navbar2 = () => {
	const handleClickScroll = (section) => {
		const element = document.getElementById(section);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="text-4xl text-red-400 ">
			<ul className="flex flex-col items-center justify-center h-screen gap-12 px-4 pb-24 bg-gray-700 opacity-90 ">
				<li className="flex flex-col items-center text-base text-gray-500">
					<PiDiamondsFourFill />
				</li>
				<li
					onClick={() => handleClickScroll("home")}
					className="flex flex-col items-center"
				>
					<VscHome />
					<p className="text-xs">home</p>
				</li>
				<li
					onClick={() => handleClickScroll("about")}
					className="flex flex-col items-center text-blue-400"
				>
					<VscAccount />
					<p className="text-xs">about</p>
				</li>
				<li
					onClick={() => handleClickScroll("projects")}
					className="flex flex-col items-center text-green-400"
				>
					<VscLayers />
					<p className="text-xs">projects</p>
				</li>
				<li
					onClick={() => handleClickScroll("contact")}
					className="flex flex-col items-center text-purple-400"
				>
					<VscMail />
					<p className="text-xs">contact</p>
				</li>
				<li className="flex flex-col items-center text-base text-gray-500">
					<PiDiamondsFourFill />
				</li>
			</ul>
		</div>
	);
};

export default Navbar2;
