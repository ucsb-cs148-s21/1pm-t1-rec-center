## Design Document

<img width="694" alt="high-level diagram" src="https://user-images.githubusercontent.com/49295014/119100097-2c638d00-ba4a-11eb-860c-c9c0b032f682.png">

### React Frontend
- Our web application consists of 5 pages:
  * A home page where the user can see the welcome message
  * An about page where short introductions of every team member is presented.
  * An activity page that shows the current occupancy level of the recreation center.
  * A hours page that displays the open and close hours for the recreation center.
  * After logging in, user can see a profile page with the information of user.
- There is a navigation bar ar the top of the page.
  * It can access the above pages.
  * A button to log in using google account.

### Authentication
- Use Google Authentication.
- Implemented using Auth0.

### API
- Get information of the week from API calls and render it into a graph.

