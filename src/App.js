import React, { useState, useEffect } from 'react';
import './App.css';
import Now from './Components/Now'
import Day from './Components/Day'

function App() {
  const [content, setContent] = useState(0);

  useEffect(() => {
    fetch('https://t1-rec-center.herokuapp.com/hello').then(res => res.json()).then(data => {
      setContent(data.content);
    });
  }, []);

  // var params = {
  //   'api_key_private': 'pri_db82504af6064a37a9e1e871589105ff',
  //   'venue_name': 'Recreation Center',
  //   'venue_address': '516 Ocean Rd Santa Barbara, CA 93117 United States'
  // }

  // $.ajax({
  //   "url": "https://besttime.app/api/v1/forecasts?" + new URLSearchParams(params),
  //   "method": "POST"
  //   }).done(function (response) {
  //       console.log(response);
  //   });
    
  return (
    <div className="App">
      <header className="App-header">
        <h1>{content}</h1>
        <p>Hello World!</p>
        <Day />
      </header>
      {/* <Now /> */}
    </div>
  );
}

export default App;