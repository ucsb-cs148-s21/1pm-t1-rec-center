const getUser = () => {
	if (!window.gapi) {
		return null;
	}

	const authInstance = window.gapi.auth2.getAuthInstance();
	const isSignedIn = authInstance.isSignedIn.get();

	if (isSignedIn === false) {
		return null;
	}

	const user = authInstance.currentUser.get();
	const profile = {
		...user.getBasicProfile(),
		signOut: authInstance.signOut,
	};

	return profile;
}

export default getUser;