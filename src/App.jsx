import React from "react";

import Container from "./components/Container";
import Sections from "./components/Sections";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";

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
					<Projects contacts={contacts} />
					<Contact contacts={contacts} />
					<Footer />
				</Sections>
			</Container>
		</>
	);
}

export default App;
