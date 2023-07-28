import React from "react";

const Sections = ({ children }) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="w-full max-w-4xl">{children}</div>
		</div>
	);
};

export default Sections;
