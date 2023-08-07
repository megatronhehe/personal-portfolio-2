import React from "react";

const Section = ({ children, sectionName }) => {
	return (
		<div id={sectionName} className="pb-56 sm:pt-56">
			{children}
		</div>
	);
};

export default Section;
