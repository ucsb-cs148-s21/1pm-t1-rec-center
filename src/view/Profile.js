import React, {useEffect, useState} from 'react';
import getUser from '../utils/get-user';
import { format, subHours, startOfMonth } from 'date-fns';
import {
  MonthlyBody,
  MonthlyDay,
  MonthlyCalendar,
  MonthlyNav,
  DefaultMonthlyEventItem,
} from '@zach.codes/react-calendar';
import '@zach.codes/react-calendar/dist/calendar-tailwind.css';

const Profile = () => {
  const user = getUser();

  let [currentMonth, setCurrentMonth] = useState(new Date());

  function appendPre(message) {
	var pre = document.getElementById('content');
	var textContent = document.createTextNode(message + '\n');
	pre.appendChild(textContent);
  }
  
  function clearPre() {
	var pre = document.getElementById('content');
	while (pre.firstChild) {
		pre.removeChild(pre.firstChild);
	}
  }
  
  var API_KEY = process.env.REACT_APP_API_KEY;
  var events = [];
  
  let [events2, setEvents2] = useState([]);
  
  const listUpcomingEvents = () => {
	/*
	console.log(window.gapi.client.calendar.events.list);
	window.gapi.client.calendar.calendarList.list({
		  
		}).then(function(response) {
		  var calendars = response.result.items;
		  console.log(calendars);
		});
		*/
	window.gapi.client.load('calendar', 'v3', () => {
		window.gapi.client.calendar.events.list({
		  'calendarId': 'primary',
		  'timeMin': (new Date()).toISOString(),
		  'showDeleted': false,
		  'singleEvents': true,
		  'orderBy': 'startTime'
		}).then(function(response) {
		  var events = response.result.items;
		  console.log(events);
		  //clearPre();
		  //appendPre('Upcoming events:');

		  var events3 = [];
		  if (events.length > 0) {
			for (var i = 0; i < events.length; i++) {
			  var event = events[i];
			  var when = event.start.dateTime;
			  if (!when) {
				when = event.start.date;
			  }
			  //appendPre(event.summary + ' (' + when + ')')
			  var e = {
				title: event.summary,
			    date: new Date(when)
			  };
			  events3.push(e);
			}
		  } else {
			//appendPre('No upcoming events found.');
		  }
		  console.log(events3);
		  setEvents2(events3);
		});
	});
  };

  return (
	  <>
		<div className="profile " data-testid="profile"> 
			<h1>Calendar</h1>
			<div>
				<button onClick={listUpcomingEvents}>update calendar</button>
				<pre id="content"></pre>
			</div>
		</div>
		<MonthlyCalendar currentMonth={currentMonth} 
		  onCurrentMonthChange={date => setCurrentMonth(date)}>
		  <MonthlyNav />
		  <MonthlyBody events={events2}>
		    <MonthlyDay
			  renderDay={data =>
			    data.map((item, index) => (
			      <DefaultMonthlyEventItem
				    key={index}
				    title={item.title}
				    // Format the date here to be in the format you prefer
				    date={format(item.date, 'k:mm')}
				  />
			    ))
			  }
		    />
		  </MonthlyBody>
	    </MonthlyCalendar>
	  </>
  );
}

export default Profile;