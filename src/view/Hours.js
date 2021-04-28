import React from 'react';
import './Hours.css'


const Hours = () => {
	return (
        <>
                <div className="hours animate__animated animate__slower animate__fadeIn">
                    <h1>Hours</h1>
                    <div className='days'>
                    <h4><strong>REGULAR HOURS</strong></h4><br />
                    <p><strong>Monday to Thursday</strong><br />6am-11pm<br />Pool Hours: 6:30am–9pm</p><br />
                    <p><strong>Friday</strong><br />6am–9pm <br />Pool Hours: 6:30am–8:30pm</p><br />
                    <p><strong>Saturday</strong><br />9am–9pm <br />Pool Hours: 9am-8:30pm</p><br />
                    <p><strong>Sunday</strong><br />9am–10pm<br />Pool Hours: 9am–8:30pm</p><br />
                    <p><strong>Climbing Center </strong> opens at 11:30am everyday the Rec Cen is open and closes 30 min before the Rec Cen</p><br />
                    </div>
                </div>
      </>
	);
}

export default Hours;