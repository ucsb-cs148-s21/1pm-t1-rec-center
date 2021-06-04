## Design Document
<img width="794" alt="chart" src="https://user-images.githubusercontent.com/49295014/120770086-5cce1f80-c550-11eb-9be9-793caca20b05.png">




### React Frontend
- Our web application consists of 5 pages:
  * A home page where the user can see the welcome message
  * An about page where short introductions of every team member is presented.
  * An activity page that shows the current occupancy level of the recreation center.
  * A hours page that displays the open and close hours for the recreation center.
  * After logging in, user can see a profile page with user's google calendar.
- There is a navigation bar ar the top of the page.
  * It can access the above pages.
  * A button to log in using google account.

### Authentication
- Use Google Authentication.
- Implemented using Auth0.

### API
- Get information of the week from API calls and render it into a graph.
- Get weather information from API and provide it in the activity page.
- Get Google calendar information from API and display it on profile page.

### User Interface
- This is our home page 
  * By pressing the Sign in button on the navigation bar, users can log in.
  * By pressing the Track Activity on the page, it will jump to the Activity page.
<img width="1440" alt="home" src="https://user-images.githubusercontent.com/49295014/119929630-73a0cf00-bfb0-11eb-8cb2-7ca37b5b436c.png">

- This is our activity page 
  * Users can see a bar chart of the occupancy level of the current day.
  * Users can also check the bar charts of occupancy level of other days in a week by selecting on the days navigation bar.
  * The right side shows the percentage of occupancy level of the current hour.
  * The lower right shows the current weather and temperature.
<img width="1439" alt="Friday" src="https://user-images.githubusercontent.com/49295014/119931142-676a4100-bfb3-11eb-9a80-1996b2483588.png">
<img width="1440" alt="Thursday" src="https://user-images.githubusercontent.com/49295014/119931140-65a07d80-bfb3-11eb-8530-5c49360411a7.png">

- This is our profile page
  * After logging in, users can see a profile page.
<img width="1438" alt="profile" src="https://user-images.githubusercontent.com/49295014/120770303-94d56280-c550-11eb-8195-543d8c28af59.png">




### Design Process
- We choose to use React to build our frontend, because we are most familiar with this and easy to begin.
- We choose to use Happy Time API to retrieve the information we need for the occupancy level.
- We first implemented the navigation bar and the basic pages.
<img width="1436" alt="IMG_7883" src="https://user-images.githubusercontent.com/49295014/119935908-deef9e80-bfba-11eb-9adb-c73f46fef76e.PNG">

- We implemented the contents of the pages and modified the style of the pages.
<img width="1154" alt="截屏2021-05-28 下午2 02 35" src="https://user-images.githubusercontent.com/49295014/119937483-6fc77980-bfbd-11eb-99f3-1e5a01bb2dc3.png">

- After MVP
  * Added the button for logging in, and a profile page.
  * Updated the overall layout.
<img width="1034" alt="activitypage" src="https://user-images.githubusercontent.com/49295014/119946027-bd95af00-bfc8-11eb-8926-4164b09b07c9.png">

- We implemented the design of showing everyday of a week on the activity page.
- We added a component that shows the percentage of the current hour's occupancy level.
- We added a component that suggests the best time for users to go the recreation center, and shows the days at gym this month of the user.
- We further added the weather and temperature component.
- We added the Google calendar on our profile page.
- Using Figma, we designed a better layout of the pages.
<img width="1440" alt="截屏2021-05-28 下午3 26 09" src="https://user-images.githubusercontent.com/49295014/119946349-1f561900-bfc9-11eb-88f0-c546074471cf.png">



