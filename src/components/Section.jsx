import React from "react";
import { motion } from "framer-motion";

const Section = ({ children, sectionName }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			id={sectionName}
			className="pb-56 sm:pt-56"
		>
			{children}
		</motion.div>
	);
};

export default Section;
