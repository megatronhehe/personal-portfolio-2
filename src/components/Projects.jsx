import React from "react";

import ProjectCard from "./ProjectCard";

const Projects = () => {
	return (
		<div className="my-40 sm:h-screen sm:flex sm:flex-col sm:justify-center text-sm">
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

				<div className="grid-cols-2 gap-4 sm:grid md:grid-cols-3">
					<ProjectCard
						title="E-Commerce Clothing Website"
						description="An online clothing online shop complete with most of the actual online shop functionality like cart systems, ability to choose and pick color, and more."
					/>

					<ProjectCard
						title="Restaurant Ordering Panel App"
						description="An app to help restaurant operator to deal with customer orders,
					complete functionality to CRUD a customer order, and count price
					total of each order."
					/>

					<ProjectCard
						title="MeWatchThings App"
						description="An app to keep track of what movies or shows you have or have not
					watched yet. Hooked up with IMDB API, to give user the ability to
					search every movies and shows that exist in the world."
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
