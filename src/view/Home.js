import React from 'react';
import './Home.css';
import { Tab, Tabs, Nav } from 'react-bootstrap';


const Home = () => {
  return (
	<>
	<div className="homepage" data-testid="welcome">
		<h1 className="animate__animated animate__backInDown">WELCOME</h1>
		<h2 className="animate__animated animate__backInDown">to the UCSB Recreation Center Activity Tracker</h2>
		<Nav.Link href='/activity'><button className="animate__animated animate__backInDown">Track Activity</button></Nav.Link>
	</div>
	</>
  );
}

export default Home;
