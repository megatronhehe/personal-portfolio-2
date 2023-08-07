import React, { useState } from "react";

import {
	IoCodeSlashOutline,
	IoSparklesSharp,
	IoBookSharp,
	IoThumbsUpSharp,
	IoTvOutline,
	IoPhonePortraitOutline,
	IoLanguageOutline,
	IoBulbOutline,
} from "react-icons/io5";

import { TbHeartHandshake } from "react-icons/tb";

import { HiUserGroup, HiUser } from "react-icons/hi2";

const Skills = () => {
	const Card = ({ tech, icon, color }) => {
		return (
			<li
				className={`flex flex-col items-center justify-center font-semibold flex-grow gap-2 tracking-wide rounded-md p-2 bg-gray-700 ${color}`}
			>
				<div className="text-4xl">{icon}</div>
				{tech}
			</li>
		);
	};

	return (
		<div className="mt-4 ">
			<h2 className="flex items-center justify-center gap-2 pb-2 mb-2 text-base font-semibold text-center text-blue-400 border-b border-blue-400">
				<IoBulbOutline />
				Skills
			</h2>
			<div className="flex gap-2">
				<ul className="flex flex-col w-1/3 gap-2 text-center text-blue-400">
					<h3 className="py-2 text-sm font-semibold text-gray-700 bg-blue-400">
						Code
					</h3>
					<li className="flex flex-col items-center gap-2 p-2 bg-gray-700">
						<div className="flex ">
							<IoCodeSlashOutline className="text-4xl" />
							<IoSparklesSharp className="text-white" />
						</div>
						Create clean code
					</li>
					<li className="flex flex-col items-center gap-2 p-2 bg-gray-700">
						<IoBookSharp className="text-4xl" />
						Create easily readable code
					</li>
					<li className="flex flex-col items-center gap-2 p-2 bg-gray-700">
						<IoThumbsUpSharp className="text-4xl" />
						Following best practices
					</li>
					<li className="flex flex-col items-center gap-2 p-2 bg-gray-700">
						<div className="flex text-4xl">
							<IoTvOutline />
							<IoPhonePortraitOutline />
						</div>
						Create responsive design
					</li>
				</ul>
				<ul className="flex flex-col w-1/3 gap-2 text-center text-red-400">
					<h3 className="py-2 text-sm font-semibold text-gray-700 bg-red-400">
						Communication
					</h3>
					<li className="flex flex-col items-center gap-2 p-2 bg-gray-700">
						<TbHeartHandshake className="text-4xl" />
						Polite & respectful use of language
					</li>
					<li className="flex flex-col items-center gap-2 p-2 bg-gray-700">
						<IoLanguageOutline className="text-4xl" />
						An effective native & english speaker
					</li>
				</ul>
				<ul className="flex flex-col w-1/3 gap-2 text-center text-green-400">
					<h3 className="py-2 text-sm font-semibold text-gray-700 bg-green-400">
						Environment
					</h3>
					<li className="flex flex-col items-center gap-2 p-2 bg-gray-700">
						<HiUserGroup className="text-4xl" />
						An efficient team player
					</li>
					<li className="flex flex-col items-center gap-2 p-2 bg-gray-700">
						<HiUser className="text-4xl" />
						An effective individual worker
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Skills;
