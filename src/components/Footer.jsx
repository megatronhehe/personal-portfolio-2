import React, { useEffect, useState } from "react";

import { quotesData } from "../data/data";

import { PiDiamondsFourFill } from "react-icons/pi";

const Footer = () => {
	const [quote, setQuote] = useState([]);

	const getRandomQuote = () => {
		const randomNumber = Math.floor(Math.random() * quotesData.length);
		setQuote(quotesData[randomNumber]);
	};

	useEffect(() => {
		getRandomQuote();
	}, []);

	return (
		<div className="flex flex-col items-center gap-4 py-6 text-xs text-gray-600">
			<PiDiamondsFourFill onClick={getRandomQuote} />
			<div>
				<p>{quote.quote}</p>
				<p className="text-center">{quote.by}</p>
			</div>
			<p className="pt-4 text-gray-600 border-t border-gray-600">
				made with love by satya, not really.. but mostly with fingers{" "}
			</p>
		</div>
	);
};

export default Footer;
