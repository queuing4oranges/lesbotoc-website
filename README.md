# Lesbotoč Website

## About

The website was created as a revision to the existing website and is still work in progress.

The clients want to have a website with a slim and easy to handle CMS, in which they can update their events on a regular basis. They also want to be able to save contacts and for people to be able to sign up to events.

The backend and frontend of the website are separated.
The finished admin panel is currently hosted at:

http://lesbotoc.itisgoodtohave.me

## Functionalities

### For Admins:

- create, update, delete, show single or all contacts
- search for contacts
- export all contacts as csv
- create, update, delete, show single or all events
- add images to events
- add and delete pictures (for the user picture gallery)
- bug report function
- login/logout
- register a new admin

### For Users:

- look up all events in the calendar
- display single events in more detail (description, time/date, how to get there, website of venue)
- sign up for special events
- see events of other organization in the calendar
- browse through a gallery of photos from previous events
- get information about the organization and members thereof
- contact the organization via a contact form, phone or email
- use links to follow the organization on social media

## Tech Stack

- JavaScript (React)
- SASS
- EmailJS
- React-Router
- Axios
- Bootstrap
- Sweet Alert
- Figma (Wireframes)

## How to run the project

1. Clone the lesbotoc-backend-api from GitHub:  
   `git clone https://github.com/queuing4oranges/lesbotoc-backend-api.git`
2. Set up a Database and Tables

3. Adapt DB connection settings.

4. Clone the lesbotoc-website:  
   `git clone https://github.com/queuing4oranges/lesbotoc-website.git`

5. Change URLs in lesbotoc-website.

6. Run frontend in development mode with:  
   `npm start`

7. Build for production:  
   `npm run build`
