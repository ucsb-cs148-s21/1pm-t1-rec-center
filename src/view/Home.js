import React from 'react';
import './Home.css';
import { Nav } from 'react-bootstrap';

const Home = () => {
  return (
	<>
	<div className="homepage" data-testid="welcome">
		<h1 className="animate__animated animate__backInDown">Welcome to working out smarter</h1>
		<p className="animate__animated animate__delay-2s animate__slow animate__fadeInUp">Hi there! Welcome to our web app. Here, you'll find all sorts of tools to boost your experience at the Recreation Center at UCSB. You'll find nifty graphics that predict how busy the rec cen will be, a mini weather app, and a customizable recommendation based on your schedule. Sign up today!</p>
		<p className="animate__animated animate__delay-3s animate__slow animate__fadeInUp">
			Currently, our product has the following functionalities:
		</p>
		<ul className="animate__animated animate__delay-3s animate__slow animate__fadeInUp">			
			<li>Page containing information about recreation center hours</li>
			<li>Page containing information about development team</li>
			<li>Bar graph represenation for recreation center occupancy</li>
			<li>Working navigation bar implementation</li>
		</ul>
	</div>
	</>
  );
}

export default Home;