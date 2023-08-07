import React, { useState } from "react";

import { PiCubeBold } from "react-icons/pi";
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	SiReactrouter,
	SiTailwindcss,
} from "react-icons/si";

const TechStacks = () => {
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
				<PiCubeBold />
				Tech Stacks
			</h2>
			<ul className="grid grid-cols-3 gap-2 text-blue-400 md:grid-cols-6 ">
				<Card tech="HTML" icon={<SiHtml5 />} color="text-orange-500" />
				<Card tech="CSS" icon={<SiCss3 />} color="text-blue-400" />
				<Card
					tech="JavaScript"
					icon={<SiJavascript />}
					color="text-yellow-400"
				/>
				<Card tech="React" icon={<SiReact />} color="text-blue-300" />
				<Card
					tech="ReactRouter"
					icon={<SiReactrouter />}
					color="text-red-400"
				/>

				<Card tech="Tailwind" icon={<SiTailwindcss />} color="text-cyan-600" />
			</ul>
		</div>
	);
};

export default TechStacks;
