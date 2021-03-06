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
- Change directory to 1pm-t1-rec-center folder that was created from git clone
```
cd 1pm-t1-rec-center
```
- Install `npm` modules
```
npm install
```
- Install packages and dependencies, build the app
```
npm run build
```
or
```
yarn build
```
- To access full functionality of the web application
  - Create a .env file 
  - Inside the .env file write
  ```
  REACT_APP_AUTH_CLIENT_ID = 947923965525-p9pdhdbfa5oc9m4vfrql1mvcrl47jjga.apps.googleusercontent.com
  REACT_APP_API_KEY = AIzaSyAAn2t2OBohpgFZI-eHqkDBJ3lPtferank
  ```
  - Go to the following link as an example
    * [EXAMPLE](https://github.com/ucsb-cs148-s21/1pm-t1-rec-center/blob/main/.env.SAMPLE)

### Local Deployment

- Run the following 
```
npm run start
```
or
```
yarn start
```
You should be able to see the app now.

## Global Deployment
- Upload code to new github repo.
- Use Heroku to deploy that new github repo.

### Deployment Instruction Video
- Click on the following link to watch the deployment instruction video
  * [Deployment Instruction Video](https://youtu.be/1SzB5J0oFyI)
