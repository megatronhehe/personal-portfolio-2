import React, { useState } from "react";

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
		}
	};

	return (
		<div className="text-2xl text-red-400 ">
			<button
				onClick={() => setToggle((prev) => !prev)}
				className="p-4 bg-gray-700 opacity-90 rounded-xl"
			>
				<VscThreeBars />
			</button>
			{toggle && (
				<ul className="flex flex-col items-center gap-12 py-4 mt-2 text-center bg-gray-700 opacity-90 rounded-xl">
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
			)}
		</div>
	);
};

export default Navbar;
