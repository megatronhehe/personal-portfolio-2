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
		<div className="flex flex-col items-center gap-4 py-6 my-20 text-xs text-center text-gray-600">
			<PiDiamondsFourFill onClick={getRandomQuote} />
			<div className="flex flex-col justify-between h-20">
				<p className="mb-2">{quote.quote}</p>
				<p>- {quote.by}</p>
			</div>
			<p className="pt-4 text-gray-600 border-t border-gray-600">
				made by satya 2023 - powered by netlify - made using React JS + Tailwind
				CSS
			</p>
		</div>
	);
};

export default Footer;
