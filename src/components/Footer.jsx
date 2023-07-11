import React from "react";

import { PiDiamondsFourFill } from "react-icons/pi";

const Footer = () => {
	return (
		<div className="flex flex-col items-center gap-4 text-xs text-gray-600 py-6">
			<PiDiamondsFourFill />
			<div>
				<p>"If failure makes you stronger, you can never lose."</p>
				<p className="text-center">- A. Tate</p>
			</div>
			<p className=" text-gray-700">
				made with love by satya, not really.. but mostly with fingers{" "}
			</p>
		</div>
	);
};

export default Footer;
