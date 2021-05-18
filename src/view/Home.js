import React from 'react';
import './Home.css';
import { Card, Tab, Tabs, Nav } from 'react-bootstrap';


const Home = () => {
  return (
	<>
	<div className="homepage" data-testid="welcome">
		<h1 className="animate__animated animate__backInDown">WELCOME</h1>
		<h2 className="animate__animated animate__backInDown">to the USCB Recreation Center Activity Tracker</h2>
		<Nav.Link href='/activity'><button className="animate__animated animate__backInDown">Track Activity</button></Nav.Link>
	</div>
	<Card>
		<Tabs>
			<Tab eventKey='Monday' profile='Monday'>
			</Tab>
			<Tab eventKey='Tuesday' profile='Tuesday'>
			</Tab>
			<Tab eventKey='Wednesday' profile='Wednesday'>
			</Tab>
			<Tab eventKey='Thursday' profile='Thursday'>
			</Tab>
			<Tab eventKey='Friday' profile='Friday'>
			</Tab>
			<Tab eventKey='Saturday' profile='Saturday'>
			</Tab>
			<Tab eventKey='Sunday' profile='Sunday'>
			</Tab>
		</Tabs>
	</Card>
	</>
  );
}

export default Home;