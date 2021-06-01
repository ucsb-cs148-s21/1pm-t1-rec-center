# [rec-center](https://t1-rec-center.herokuapp.com/)

A simple web app that tracks the traffic at the rec-center. 
Intended users are UCSB students.
    The students should be able to create a schedule.
    The students should be able to see the current occupancy.
    The students should get a personalized recommendation on the best time to go to the Rec Cen.
    The students should be able to access the opening hours for the Rec Cen.
    The students should be able to navigate the app easily.
    The users should be authenticated in order to view the schedule tab.

* [Deployment Instructions](./docs/DEPLOY.md)

## Functionality
---
- Homepage: Introduction to the functionalities of the web app
- About: About us page for the members of the team that worked on the web app
- Activity: Page that shows the predicted occupancy level of the rec cen
- Hours: Page that lists the regular hours of the recreation center

## Known Problems
---
- API keys have a limited number of uses until they must be manually renewed
- several API keys are public in our repository, and this was a team-wide decision because there poses little risk. This is susceptible to API changes made by Google Calendar, which would require manual updating from our end

## members

- Bryan Xu - XuperBryan
- Andy Ho - andyyyho
- Silvia Yu - silviayu
- Alejandro Rojas Rodriguez - AlejandroRR16
- Billy Wu - namabilly

## tech stack

- frontend - React
- backend - Flask
- database - MongoDB
- api - BestTime

## user roles
- students looking to work out at the rec cen
- administrators that set if the rec cen is currently closed/on holiday

## leadership roles
- Product Manager: Andy Ho
- Scrum Master: Bryan Xu
- Scrum Members: Alejandro Rodriguez, Billy Wu, Silvia Yu

## implementation effort
- implementation largely fueled by periodic sprint planning meetings, where we talked about what goals we'd like to achieve as a team, and distribute the work accorindgly
- during the first sprint, we were planning on the implementation details for the mvp, which included just the basic "day" view of the rec cen
- at this point, we also put in some other basic functionalities, such as a page containing information about our group and a page containing information about the rec cen hours of operation
- in order to make it all complete, we wrapped up the functionality using a navbar that was native to React, react-router
- during the second sprint, we wanted to make the view of the occupancy level more accessible, so we moved it to the home page, and also added small changes to improve its easy of use
- we added a functionality that informed the user of the current occupancy level, the current day and time, and a visual indicator of the occupancy level compared to the rest of the day
- we also started experimenting with logging in with Google Authentication, where users will be able to upload their google calendar to work with our web application (coming in an upcoming update)
- for the third sprint, we focused once again on improved the occupancy level display and UI, as it was the main component of our program
- we learned to use props to efficiently create the entire week view at once, and changed the css to make the formatting of the page look better
- we also added functionality by displaying the occupancy level in a circle graph and we also display the current temperature and weather as well
- overall, this last sprint has been focused on improving the UI and to make it more useful to the average student

## repository structure
1pm-t1-rec-center/
    └── src/
        ├── components/
        │   ├── Dashboard.css
        │   ├── Dashboard.js
        │   ├── Day.js
        │   ├── Layout.js
        │   ├── NavBar.css
        │   ├── NavBar.js
        │   ├── NavBar.test.js
        │   ├── Occupancy.css
        │   ├── Occupancy.js
        │   ├── Weather.js
        │   └── Week.js
        ├── utils/
        │   ├── AppRoute.js
        │   └── get-user.js
        ├── view/
        │   ├── About.css
        │   ├── About.js
        │   ├── Activity.css
        │   ├── Activity.js
        │   ├── Home.css
        │   ├── Home.js
        │   ├── Hours.css
        │   ├── Hours.js
        │   └── Profile.js
        ├── App.css
        ├── App.js
        └── App.test.js
