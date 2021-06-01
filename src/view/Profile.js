import React, {useEffect, useState} from 'react';
import getUser from '../utils/get-user';

const Profile = () => {
  const user = getUser();

  function appendPre(message) {
	var pre = document.getElementById('content');
	var textContent = document.createTextNode(message + '\n');
	pre.appendChild(textContent);
  }
  
  const listUpcomingEvents = () => {
	console.log(window.gapi.client);
	window.gapi.client.load('calendar', 'v3', () => {
	window.gapi.client.calendar.events.list({
	  'calendarId': 'primary',
	  'timeMin': (new Date()).toISOString(),
	  'showDeleted': false,
	  'singleEvents': true,
	  'maxResults': 10,
	  'orderBy': 'startTime'
	}).then(function(response) {
	  var events = response.result.items;
	  appendPre('Upcoming events:');

	  if (events.length > 0) {
		for (var i = 0; i < events.length; i++) {
		  var event = events[i];
		  var when = event.start.dateTime;
		  if (!when) {
			when = event.start.date;
		  }
		  appendPre(event.summary + ' (' + when + ')')
		}
	  } else {
		appendPre('No upcoming events found.');
	  }
	});
	});
	
  };

  return (
	<div className="profile" data-testid="profile"> 
		<h1>This is your profile page</h1>
		<pre>{JSON.stringify(user, null, "\t")}</pre>
		<button onClick={listUpcomingEvents}>show calendar</button>
	</div>
  );
}

export default Profile;