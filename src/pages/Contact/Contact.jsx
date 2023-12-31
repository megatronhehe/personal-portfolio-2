import React, { useState } from "react";

import waqr from "../../assets/waqr.jpg";

import { RiPhoneFill } from "react-icons/ri";

import Section from "../../components/Section";

import {
	BsDiscord,
	BsLinkedin,
	BsInstagram,
	BsWhatsapp,
	BsGithub,
} from "react-icons/bs";

import { VscMail } from "react-icons/vsc";

const Contact = ({ contacts }) => {
	const { phone, email, linkedin, discord, instagram, github } = contacts;

	const [toggleWA, setToggleWA] = useState(false);

	return (
		<Section sectionName="contact">
			<h1 className="pl-4 mt-4 text-2xl text-purple-400 border-l-4 border-purple-400">
				Contact
			</h1>

			<p className="p-4 my-4 text-gray-300 bg-gray-700 rounded-xl">
				You can reach me in various ways below:
			</p>

			<div className="justify-around sm:flex">
				<div className="px-2 mb-4 text-purple-400 border-l-2 border-purple-400">
					<p className="font-semibold">General Contact</p>
					<ul className="flex flex-col gap-2 mt-2">
						<li className="flex items-center gap-2">
							<RiPhoneFill />
							<p>{phone}</p>
						</li>
						<li className="flex items-center gap-2">
							<VscMail />
							<p>{email}</p>
						</li>
					</ul>
				</div>

				<div className="px-2 text-purple-400 border-l-2 border-purple-400">
					<p className="font-semibold">Social Media</p>
					<ul className="flex flex-col gap-2 mt-2">
						<a
							href={linkedin.link}
							target="_blank"
							className="flex items-center gap-2 px-2 py-1 rounded-sm hover:bg-purple-400 hover:text-gray-800"
						>
							<BsLinkedin />
							<p>{linkedin.name}</p>
						</a>
						<a
							href={discord.link}
							target="_blank"
							className="flex items-center gap-2 px-2 py-1 rounded-sm hover:bg-purple-400 hover:text-gray-800"
						>
							<BsDiscord />
							<p>{discord.name}</p>
						</a>
						<a
							href={instagram.link}
							target="_blank"
							className="flex items-center gap-2 px-2 py-1 rounded-sm hover:bg-purple-400 hover:text-gray-800"
						>
							<BsInstagram />
							<p>{instagram.name}</p>
						</a>
						<button
							onClick={() => setToggleWA((prev) => !prev)}
							className="relative flex items-center gap-2 px-2 py-1 rounded-sm hover:bg-purple-400 hover:text-gray-800"
						>
							<BsWhatsapp />
							<p>{phone}</p>
							{toggleWA && (
								<img
									className="absolute w-2/3 top-2 right-2"
									src={waqr}
									alt=""
								/>
							)}
						</button>
						<a
							href={github.link}
							target="_blank"
							className="flex items-center gap-2 px-2 py-1 rounded-sm hover:bg-purple-400 hover:text-gray-800"
						>
							<BsGithub />
							<p>{github.name}</p>
						</a>
					</ul>
				</div>
			</div>
		</Section>
	);
};

export default Contact;
