import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
	return (
		<>
		<Navbar expand="lg" data-testid='navbar'>
				<Nav className='topPart'>
					<Nav.Item className='link'><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
					<Nav.Item className='link'><Nav.Link href='/about'>About</Nav.Link></Nav.Item>
					<Nav.Item className='link'><Nav.Link href='/activity'>Activity</Nav.Link></Nav.Item>
					<Nav.Item className='link'><Nav.Link href='/hours'>Hours</Nav.Link></Nav.Item>
				</Nav>
		</Navbar>
		</>
	);
}

export default NavBar;
