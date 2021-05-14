import React from 'react';
import NavBar from './NavBar';

const Layout = (props) => {
	const user = props.user;
	
	return (
		<>
		<div>
			<NavBar user={user}/>
		</div>
		<main>{props.children}</main>
		</>
	);
}

export default Layout;
