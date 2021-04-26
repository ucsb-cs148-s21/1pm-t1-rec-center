import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
	return (
		<>
		<Navbar expand="lg">
			<Navbar.Collapse>
				<Nav>
					<Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link href='/about'>About</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link href='/activity'>Activity</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link href='/hours'>Hours</Nav.Link></Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		</>
	);
}

export default NavBar;
