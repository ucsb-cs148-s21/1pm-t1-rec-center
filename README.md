# [rec-center](https://t1-rec-center.herokuapp.com/)

A simple web app that tracks the traffic at the rec-center. 
Intended users are UCSB students.
    The students should be able to create a schedule.
    The students should be able to see the current occupancy.
    The students should get a personalized recommendation on the best time to go to the Rec Cen.
    The students should be able to access the opening hours for the Rec Cen.
    The students should be able to navigate the app easily.
    The users should be authenticated in order to view the schedule tab.

## Getting Started

### Prerequisites

- Before you start, you need to have `Node.js` `npm/yarn` `python` ready. 

### Dependencies

- React: to run the app properly
- Axios: to make API calls to BestTime API
- Animate.css: to add animations to the web app
- chart.js: create nice chart to display information from API

### Installation

- Clone this repo and pull from the main branch 
```
git clone https://github.com/ucsb-cs148-s21/1pm-t1-rec-center.git
```
- Install `Flask` and `Python-dotenv`, you can also setup a virtual environment
```
pip install flask python-dotenv
```
- For virtual environment, do these before you run the above command
```
python -m venv venv
venv/bin/activate (Linux)
venv/Scripts/activate (Windows)
```
- Install packages and dependencies, build the app
```
npm build
```
or
```
yarn build
```

### Launch

- Run the following from the repo's home directory
```
npm start-api
```
or
```
yarn start-api
```
- Run the following from the same path but from another terminal (simultaneously)
```
npm start
```
or
```
yarn start
```
You should be able to see the app now.

## Functionality
---
Homepage: Introduction to the functionalities of the web app
About: About us page for the members of the team that worked on the web app
Activity: Page that shows the predicted occupancy level of the rec cen
Hours: Page that lists the regular hours of the recreation center

## Known Problems
---
None at the moment


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
