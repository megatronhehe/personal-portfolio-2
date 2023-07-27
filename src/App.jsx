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
				<div className="fixed bottom-0 left-0 z-50 lg:invisible">
					<Navbar />
				</div>
				<div className="fixed top-0 left-0 z-50 invisible lg:visible">
					<Navbar2 />
				</div>

				<div className="flex flex-col items-center justify-center">
					<div className="w-full max-w-4xl">
						<div id="home">
							<Home />
						</div>

						<div id="about">
							<About />
						</div>

						<div id="projects">
							<Projects />
						</div>

						<div id="contact">
							<Contact />
						</div>

						<div id="footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
// <div className="fixed top-0 z-50 flex items-center justify-center w-full h-screen">
// 	<div className="flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
// 		<h1>modal here</h1>
// 	</div>
// </div>

export default App;
