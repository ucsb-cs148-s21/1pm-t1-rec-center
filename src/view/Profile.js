import React from 'react';
import getUser from '../utils/get-user';

const Profile = () => {
  const user = getUser();
	
  return (
	<div className="profile" data-testid="profile"> 
		<h1>This is your profile page</h1>
		<pre>{JSON.stringify(user, null, "\t")}</pre>
	</div>
  );
}

export default Profile;