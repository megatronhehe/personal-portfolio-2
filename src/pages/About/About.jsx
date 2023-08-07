import React, { useState } from "react";

import Section from "../../components/Section";

import Biodata from "./Biodata";
import Description from "./Description";
import TechStacks from "./TechStacks";
import Skills from "./Skills";

const About = () => {
	return (
		<Section sectionName={"about"}>
			<div className="text-sm ">
				<div>
					<h1 className="pl-4 mb-4 text-2xl text-blue-400 border-l-4 border-blue-400">
						about
					</h1>

					<div className="flex flex-col gap-2 md:flex-row">
						<Description />
						<Biodata />
					</div>
					<TechStacks />
					<Skills />
				</div>
			</div>
		</Section>
	);
};

export default About;
