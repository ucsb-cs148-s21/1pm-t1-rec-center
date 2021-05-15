import React, { useEffect } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.css';

const NavBar = (props) => {
	const user = props.user;
	console.log(user);
	useEffect(() => {
		if (window.gapi) {
			window.gapi.load("signin2", () => {
				window.gapi.signin2.render("login-button", {
				  theme: "dark",
				});
			});
		}
	});
	
	return (
		<>
		<Navbar expand="lg" data-testid='navbar'>
			<Nav className='topPart'>
				<Nav.Item className='link'><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
				<Nav.Item className='link'><Nav.Link href='/about'>About</Nav.Link></Nav.Item>
				<Nav.Item className='link'><Nav.Link href='/activity'>Activity</Nav.Link></Nav.Item>
				<Nav.Item className='link'><Nav.Link href='/hours'>Hours</Nav.Link></Nav.Item>
				{user ? (
					<Nav.Item className='link'><Nav.Link href='/profile'>Profile</Nav.Link></Nav.Item>
				) : (
					<></>
				)}
			</Nav>
			<Nav>
            {!user ? (
				<div id="login-button" />
            ) : (
				<NavDropdown
					title={
						<span>
							Hello, {user.kV}{" "}
							<img
								src={user.ZJ}
								alt="profile"
								style={{ width: "24px", height: "24px" }}
							/>{" "}
						</span>
					}
					id="basic-nav-dropdown"
				>
					<NavDropdown.Item onClick={user.signOut}>
						Logout
					</NavDropdown.Item>
				</NavDropdown>
            )}
          </Nav>
		</Navbar>
		</>
	);
}

export default NavBar;
