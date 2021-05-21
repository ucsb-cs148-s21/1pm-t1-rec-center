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
