import React from 'react';
import NavBar from './NavBar';

const Layout = ({children}) => {
	return (
		<>
		<div>
			<NavBar />
		</div>
		<main>{children}</main>
		</>
	);
}

export default Layout;
