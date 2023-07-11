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
		<div className="text-sm mb-40">
			<h1 className="text-base border-l-4 border-red-400 pl-4 text-red-400">
				Contact
			</h1>

			<p className="bg-gray-700 text-gray-300 p-4 my-4 rounded-xl">
				You can reach me in various ways below:
			</p>

			<div className="sm:flex justify-around">
				<div className="text-blue-400 mb-4">
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

				<div className="text-red-400">
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
