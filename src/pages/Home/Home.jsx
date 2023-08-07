import React, { useEffect } from "react";

import Section from "../../components/Section";

import satya from "../../assets/satyajpg2.jpg";

import { PiDiamondsFourFill } from "react-icons/pi";
import { ImProfile } from "react-icons/im";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Home = ({ contacts }) => {
	useEffect(() => {
		const element = document.getElementById("home");
		element.scrollIntoView({ behavior: "smooth" });
	}, []);

	const { linkedin, github, resume } = contacts;

	return (
		<Section sectionName={"home"}>
			<div className="relative flex flex-col items-center justify-center gap-4 mt-4 sm:flex-row">
				<div className="flex flex-col items-center">
					<h1 className="mt-4 text-4xl tracking-wide text-red-400 sm:mt-0">
						Satya Mahendra
					</h1>
					<p className="flex items-center gap-2 mb-4 text-blue-400">
						<PiDiamondsFourFill />
						Frontend <span className="font-bold text-blue-300">React</span> Web
						Developer
					</p>
					<img
						src={satya}
						alt="satya"
						className="w-3/4 border-2 border-red-400 rounded-full shadow-xl"
					/>
				</div>
				<div className="flex flex-col gap-4">
					<PiDiamondsFourFill className="self-center text-red-400" />
					<div className="flex flex-col p-4 border-red-400 border-y">
						<p className="mb-4 text-gray-300 ">
							A passionate frontend{" "}
							<span className="font-semibold text-blue-400">React</span> web
							developer passionate on building{" "}
							<span className="text-blue-400">interactive</span> and{" "}
							<span className="text-blue-400">responsive web app</span>.
						</p>
						<ul className="flex justify-between gap-2 text-2xl">
							<li className="flex gap-2">
								<a
									href={linkedin.link}
									target="_blank"
									className="p-2 text-gray-300 bg-gray-700 border border-gray-300 rounded-full"
								>
									<FaLinkedin />
								</a>
								<a
									href={github.link}
									target="_blank"
									className="p-2 text-gray-200 bg-gray-700 border border-gray-300 rounded-full"
								>
									<FaGithub />
								</a>
							</li>

							<a
								href={resume}
								target="_blank"
								className="flex items-center gap-2 p-2 font-semibold text-gray-700 bg-red-400 rounded-md"
							>
								<p className="text-sm">résumé</p>
								<ImProfile />
							</a>
						</ul>
					</div>
					<PiDiamondsFourFill className="self-center text-red-400" />
				</div>
			</div>
		</Section>
	);
};

export default Home;
