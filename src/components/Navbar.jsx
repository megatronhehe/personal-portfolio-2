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

	return (
		<div className=" text-red-400  text-2xl ">
			<button
				onClick={() => setToggle((prev) => !prev)}
				className="bg-gray-700 opacity-90 p-4 rounded-xl"
			>
				<VscThreeBars />
			</button>
			{toggle && (
				<ul className="bg-gray-700 flex flex-col py-4 gap-12 items-center text-center opacity-90 mt-2 rounded-xl">
					<li className="flex text-base text-gray-500 flex-col items-center">
						<PiDiamondsFourFill />
					</li>
					<li className="flex flex-col items-center">
						<VscHome />
						<p className="text-xs">home</p>
					</li>
					<li className="flex flex-col items-center">
						<VscAccount />
						<p className="text-xs">about</p>
					</li>
					<li className="flex flex-col items-center">
						<VscLayers />
						<p className="text-xs">projects</p>
					</li>
					<li className="flex flex-col items-center">
						<VscMail />
						<p className="text-xs">contact</p>
					</li>
					<li className="flex text-base text-gray-500 flex-col items-center">
						<PiDiamondsFourFill />
					</li>
				</ul>
			)}
		</div>
	);
};

export default Navbar;
