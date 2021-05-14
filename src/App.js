import React, { useState, useEffect } from 'react';
import AppRoute from './utils/AppRoute';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './view/Home';
import About from './view/About';
import Activity from './view/Activity';
import Hours from './view/Hours';
import 'bootstrap/dist/css/bootstrap.css';
require('dotenv').config();

const App = () => {
	const [isSignedIn, setIsSignedIn] = useState(null);

	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://apis.google.com/js/platform.js";
		script.onload = () => initGoogleSignIn();
		document.body.appendChild(script);
	}, []);
	
	function initGoogleSignIn() {
		window.gapi.load("auth2", () => {
			window.gapi.auth2
				.init({
					client_id: process.env.REACT_APP_AUTH_CLIENT_ID,
				})
				.then(() => {
					const authInstance = window.gapi.auth2.getAuthInstance();
					const isSignedIn = authInstance.isSignedIn.get();
					setIsSignedIn(isSignedIn);

					authInstance.isSignedIn.listen((isSignedIn) => {
							setIsSignedIn(isSignedIn);
					});
				});
		});
	}
  
	return (
		<>
			<BrowserRouter>
				<Switch>
					<AppRoute exact path="/" component={Home} layout={Layout} />
					<AppRoute path="/about" component={About} layout={Layout} />
					<AppRoute path="/activity" component={Activity} layout={Layout} />
					<AppRoute path="/hours" component={Hours} layout={Layout} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;