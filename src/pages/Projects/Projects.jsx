import React, { useState } from "react";

import { projectData } from "../../data/projectData";

import ProjectCard from "./ProjectCard";
import Section from "../../components/Section";

import { IoInformationCircleSharp, IoLogoGithub } from "react-icons/io5";

const Projects = ({ contacts }) => {
	const [toggleInfo, setToggleInfo] = useState(false);

	const projectCardElement = projectData.map((project, i) => (
		<ProjectCard
			key={project.id}
			index={i}
			title={project.title}
			description={project.description}
			image={project.image}
			logo={project.logo}
			sc={project.sc}
		/>
	));

	return (
		<Section sectionName="projects">
			<div className="mt-4 text-sm">
				<div className="relative">
					<h1 className="pl-4 text-2xl text-green-400 border-l-4 border-red-400">
						projects
					</h1>

					<div className="p-4 my-4 text-gray-300 bg-gray-700 rounded-xl">
						<p className="text-justify">
							The projects are purely made by me, my own design, my own code, my
							own everything. Here are a few of my featured projects.
						</p>
					</div>
					<button
						onClick={() => setToggleInfo((prev) => !prev)}
						className="absolute top-0 right-0 flex items-center gap-2 mb-4 text-xs text-gray-400"
					>
						<IoInformationCircleSharp className="text-xl" />
						{toggleInfo && (
							<p className="absolute z-10 w-32 p-2 bg-gray-800 border border-gray-400 rounded-tl-xl rounded-b-xl right-2 top-2 bg-opacity-80 backdrop-filter backdrop-blur-sm">
								if live demo is unavailable, it probably ran out of bandwith.
								try preview images instead.
							</p>
						)}
					</button>
				</div>

				<div className="grid-cols-2 gap-4 md:grid">{projectCardElement}</div>

				<div className="flex justify-center w-full">
					<a
						href={contacts.github.link}
						target="_blank"
						className="flex items-center gap-2 p-2 pl-4 text-blue-400 bg-gray-700 rounded-full sm:mt-4 hover:bg-blue-400 hover:text-gray-700"
					>
						Visit my GitHub to see more
						<IoLogoGithub className="text-4xl" />
					</a>
				</div>
			</div>
		</Section>
	);
};

export default Projects;
