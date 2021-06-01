import React, { useState, useEffect } from 'react';
import AppRoute from './utils/AppRoute';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './view/Home';
import About from './view/About';
import Activity from './view/Activity';
import Hours from './view/Hours';
import Profile from './view/Profile';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
	const [isSignedIn, setIsSignedIn] = useState(null);

	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://apis.google.com/js/platform.js";
		script.onload = () => initGoogleSignIn();
		document.body.appendChild(script);
	}, []);
	
	var CLIENT_ID = process.env.REACT_APP_AUTH_CLIENT_ID;
    var API_KEY = process.env.REACT_APP_API_KEY;
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
	
	function initGoogleSignIn() {
		window.gapi.load('client:auth2', () => {
			console.log('loaded client');
			window.gapi.client.init({
			  apiKey: API_KEY,
			  clientId: CLIENT_ID,
			  discoveryDocs: DISCOVERY_DOCS,
			  scope: SCOPES
			}).then(function () {
			  console.log(2);
			  const authInstance = window.gapi.auth2.getAuthInstance();
			  const isSignedIn = authInstance.isSignedIn.get();
			  setIsSignedIn(isSignedIn);

			  authInstance.isSignedIn.listen((isSignedIn) => {
				setIsSignedIn(isSignedIn);
			  });
			}, function(error) {
			  appendPre(JSON.stringify(error, null, 2));
			});
			const authInstance = window.gapi.auth2.getAuthInstance();
			const isSignedIn = authInstance.isSignedIn.get();
			setIsSignedIn(isSignedIn);

			authInstance.isSignedIn.listen((isSignedIn) => {
			  setIsSignedIn(isSignedIn);
			});
		});
	}
	
	function appendPre(message) {
		var pre = document.getElementById('content');
		var textContent = document.createTextNode(message + '\n');
		pre.appendChild(textContent);
	}
	
	function updateSigninStatus() {}
	
	/*
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
	*/
	
	return (
		<>
			<BrowserRouter>
				<Switch>
					<AppRoute exact path="/" component={Home} layout={Layout} />
					<AppRoute path="/about" component={About} layout={Layout} />
					<AppRoute path="/activity" component={Activity} layout={Layout} />
					<AppRoute path="/hours" component={Hours} layout={Layout} />
					<AppRoute path="/profile" component={Profile} layout={Layout} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;