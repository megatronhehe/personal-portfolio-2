import React from "react";

import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div className="w-full px-6 bg-gray-800">
				<div className="fixed z-50 lg:invisible top-2 left-2">
					<Navbar />
				</div>
				<div className="fixed top-0 left-0 z-50 invisible lg:visible">
					<Navbar2 />
				</div>

				<div className="flex flex-col items-center justify-center">
					<div className="w-full max-w-4xl">
						<Home />
						<About />
						<Projects />
						<Contact />
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
