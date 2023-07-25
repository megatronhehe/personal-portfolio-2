import React from "react";

import { projectData } from "../data/projectData";

import ProjectCard from "./ProjectCard";

const Projects = () => {
	const projectCardElement = projectData.map((project) => (
		<ProjectCard
			key={project.id}
			title={project.title}
			description={project.description}
			image={project.image}
		/>
	));

	return (
		<div className="py-4 my-40 text-sm ">
			<div>
				<h1 className="pl-4 text-base text-green-400 border-l-4 border-red-400">
					projects
				</h1>

				<div className="p-4 my-4 text-gray-300 bg-gray-700 rounded-xl">
					<p className="text-justify">
						The projects are purely made by me, my own design, my own code, my
						own everything. Here are a few of my featured projects.
					</p>
				</div>
			</div>

			<div>{projectCardElement}</div>
		</div>
	);
};

export default Projects;
