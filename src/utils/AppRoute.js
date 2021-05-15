import React from 'react';
import { Route } from 'react-router-dom';
import getUser from '../utils/get-user';

const AppRoute = ({
	component: Component,
	layout: Layout,
	...rest
}) => {
	
	Layout = (Layout === undefined) ? props => (<>{props.children}</>) : Layout;
	
	const user = getUser();
	
	return (
		<Route
			{...rest}
			render = {props => (
				<Layout user={user}>
					<Component {...props} />
				</Layout>
			)} />
	);
}

export default AppRoute;
