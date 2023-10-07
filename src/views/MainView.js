import React from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Slider from "../components/Slider";

const AdminView = props => {
	return (
		<div fluid className='coming__soon'>
			<Navigation />
			<Slider />
			<About />
			<Portfolio />
			<Services />
			<Experience />
			<Footer />
		</div>
	);
};

export default AdminView;
