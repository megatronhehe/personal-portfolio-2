import React, { useState } from "react";

import DotaIcon from "../../assets/icons/dotaicon";

import {
	PiAddressBookBold,
	PiPersonArmsSpreadFill,
	PiMapPinFill,
	PiCodeFill,
	PiGameControllerFill,
	PiHeadphonesFill,
	PiPaintBrushFill,
} from "react-icons/pi";

import { SiCounterstrike, SiValorant } from "react-icons/si";

const Description = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="flex justify-between gap-2 p-2 bg-gray-900 sm:justify-around md:w-1/2 rounded-xl">
			<h2 className="flex flex-col items-center justify-center w-1/4 gap-2 text-lg font-semibold text-blue-400 bg-gray-800 rounded-lg">
				<PiAddressBookBold className="text-4xl" />
				Biodata
			</h2>
			<ul className="flex flex-col justify-between w-3/4 gap-2 text-base text-blue-400">
				<li className="flex items-center gap-2 p-2 bg-gray-800 rounded-md">
					<PiPersonArmsSpreadFill />
					Ida Bagus Satya Mahendra
				</li>
				<li className="flex items-center gap-2 p-2 bg-gray-800 rounded-md">
					<PiMapPinFill />
					Malang, East Java
				</li>

				<li className="flex items-center gap-2 rounded-md">
					<div className="flex flex-col w-full gap-2 p-2 bg-gray-800 rounded-lg">
						<h3 className="py-1 border-b-2 border-gray-900 ">Interest</h3>
						<div className="flex gap-1 text-2xl">
							<PiCodeFill />
							<PiGameControllerFill
								onClick={() => setToggle((prev) => !prev)}
							/>
							{toggle && (
								<div className="flex gap-1 text-red-400">
									<SiCounterstrike />
									<SiValorant />
									<DotaIcon />
								</div>
							)}
							<PiHeadphonesFill />
							<PiPaintBrushFill />
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Description;
