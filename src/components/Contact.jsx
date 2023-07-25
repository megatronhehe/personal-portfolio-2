import React from "react";

import { RiPhoneFill } from "react-icons/ri";

import {
	BsDiscord,
	BsLinkedin,
	BsInstagram,
	BsWhatsapp,
	BsGithub,
} from "react-icons/bs";

import { VscMail } from "react-icons/vsc";

const Contact = () => {
	return (
		<div className="my-40 sm:h-screen sm:flex sm:flex-col sm:justify-center text-sm">
			<h1 className="pl-4 text-base text-purple-400 border-l-4 border-purple-400">
				Contact
			</h1>

			<p className="p-4 my-4 text-gray-300 bg-gray-700 rounded-xl">
				You can reach me in various ways below:
			</p>

			<div className="justify-around sm:flex">
				<div className="px-2 mb-4 text-purple-400 border-l-2 border-purple-400">
					<p className="font-semibold">General Contact</p>
					<ul className="">
						<li className="flex items-center gap-2">
							<RiPhoneFill />
							<p> (+62) 822 - 5410 - 3639</p>
						</li>
						<li className="flex items-center gap-2">
							<VscMail />
							<p> satyamahendra09@gmail.com</p>
						</li>
					</ul>
				</div>

				<div className="px-2 text-purple-400 border-l-2 border-purple-400">
					<p className="font-semibold">Social Media</p>
					<ul className="">
						<li className="flex items-center gap-2">
							<BsLinkedin />
							<p> Ida Bagus Satya Mahendra</p>
						</li>
						<li className="flex items-center gap-2">
							<BsDiscord />
							<p>satyahehe</p>
						</li>
						<li className="flex items-center gap-2">
							<BsInstagram />
							<p>007satya_</p>
						</li>
						<li className="flex items-center gap-2">
							<BsWhatsapp />
							<p>(+62) 822 - 5410 - 3639</p>
						</li>
						<li className="flex items-center gap-2">
							<BsGithub />
							<p>megatronhehe</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Contact;
