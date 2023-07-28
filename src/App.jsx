import React from "react";

import Container from "./components/Container";
import Sections from "./components/Sections";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	const contacts = {
		phone: "(+62) 822 5410 3639",
		email: "satyamahendra09@gmail.com",
		resume:
			"https://drive.google.com/file/d/10kAqVNN3iCBp5d3vv5XApX6Ow5NGU-Ap/view?usp=drive_link",
		linkedin: {
			name: "Ida Bagus Satya Mahendra",
			link: "https://www.linkedin.com/in/ida-bagus-satya-mahendra-544129253/",
		},
		discord: {
			name: "007satya_",
			link: "https://www.linkedin.com/in/ida-bagus-satya-mahendra-544129253/",
		},
		instagram: {
			name: "007satya_",
			link: "https://www.instagram.com/007satya_/",
		},
		github: {
			name: "megatronhehe",
			link: "https://github.com/megatronhehe",
		},
	};

	return (
		<>
			<Container>
				<Navbar />
				<Navbar2 />

				<Sections>
					<Home contacts={contacts} />
					<About />
					<Projects />
					<Contact contacts={contacts} />
					<Footer />
				</Sections>
			</Container>
		</>
	);
}

export default App;
