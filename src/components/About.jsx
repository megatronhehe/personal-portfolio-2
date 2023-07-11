import React, { useState } from "react";

import {
	PiCubeBold,
	PiAddressBookBold,
	PiPersonArmsSpreadFill,
	PiMapPinFill,
	PiGameControllerFill,
	PiCodeFill,
	PiBarbellFill,
	PiPaintBrushFill,
} from "react-icons/pi";
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	SiReactrouter,
	SiTailwindcss,
	SiCounterstrike,
	SiValorant,
} from "react-icons/si";

const About = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="mb-40 text-sm">
			<h1 className="pl-4 text-base text-red-400 border-l-4 border-red-400">
				about
			</h1>
			<div className="p-4 my-4 text-gray-300 bg-gray-700 rounded-xl">
				<p className="text-justify">
					As a junior{" "}
					<span className="text-blue-400">Frontend React Web Developer</span>, I
					have expertise in{" "}
					<span className="text-blue-400">HTML, CSS, and JavaScript</span>. I
					create seamless and{" "}
					<span className="text-blue-400">interactive user interfaces</span>,
					paying close{" "}
					<span className="text-blue-400">attention to detail</span>. I excel at{" "}
					<span className="text-blue-400">problem-solving</span> and delivering
					pixel-perfect implementations. I stay up-to-date with industry trends
					and consistently{" "}
					<span className="text-blue-400">deliver clean, exceptional code</span>
					. As an <span className="text-blue-400">excellent team player</span>,
					I have experience collaborating in competitive environments. I'm also
					proficient at{" "}
					<span className="text-blue-400">independently resolving issues.</span>
				</p>
			</div>

			<div className="gap-4 sm:flex">
				<div className="flex flex-col justify-between h-48 py-1 mb-4 bg-blue-400 sm:w-1/2 rounded-xl">
					<h2 className="flex items-center justify-center gap-2 text-base font-semibold">
						<PiAddressBookBold />
						Biodata
					</h2>
					<div className="justify-between text-blue-400">
						<ul className="px-2 ">
							<li className="flex items-center gap-2 p-2 my-2 bg-gray-700 rounded-md">
								<PiPersonArmsSpreadFill />
								Ida Bagus Satya Mahendra
							</li>
							<li className="flex items-center gap-2 p-2 mt-2 bg-gray-700 rounded-md">
								<PiMapPinFill />
								Malang, East Java
							</li>
							<li className="flex items-center gap-2 rounded-md">
								<p className="p-2 my-2 bg-gray-700 rounded-lg">Interest </p>
								<div className="flex w-full gap-2 p-2 my-2 text-2xl bg-gray-700 rounded-lg">
									<PiCodeFill />

									<PiGameControllerFill
										onClick={() => setToggle((prev) => !prev)}
									/>

									{toggle && (
										<div className="flex gap-2 text-red-400">
											<SiCounterstrike />
											<SiValorant />
											<p className="text-sm">dota</p>
										</div>
									)}

									<PiBarbellFill />
									<PiPaintBrushFill />
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col justify-between h-48 py-1 bg-red-400 sm:w-1/2 rounded-xl">
					<h2 className="flex items-center justify-center gap-2 text-base font-semibold">
						<PiCubeBold />
						Tech stacks
					</h2>
					<div className="flex justify-between gap-2 text-red-400">
						<ul className="w-1/2 pl-2">
							<li className="flex items-center gap-2 p-2 my-2 bg-gray-700 rounded-md">
								<SiHtml5 />
								HTML
							</li>
							<li className="flex items-center gap-2 p-2 my-2 bg-gray-700 rounded-md">
								<SiCss3 />
								CSS
							</li>
							<li className="flex items-center gap-2 p-2 my-2 bg-gray-700 rounded-md">
								<SiJavascript />
								JavaScript
							</li>
						</ul>
						<ul className="w-1/2 pr-2">
							<li className="flex items-center gap-2 p-2 my-2 bg-gray-700 rounded-md">
								<SiReact />
								React JS
							</li>
							<li className="flex items-center gap-2 p-2 my-2 bg-gray-700 rounded-md">
								<SiReactrouter />
								React Router
							</li>
							<li className="flex items-center gap-2 p-2 my-2 bg-gray-700 rounded-md">
								<SiTailwindcss />
								Tailwind CSS
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
