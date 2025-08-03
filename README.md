# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





project explanation*>>>>>>>>>>>>  

#HealthCare Appointment Booking App

This is a **HealthCare Appointment Booking Application** built using **React.js** with responsive design and modern UI using **Styled Components**.

---

## Features Overview

- **Landing Page** with background image and animated arrow icon.
  - Arrow icon click cheyagane main home page ki navigate avutundi.

- **Home Page** includes:
  - `Header` (with logo & navigation)
  - `Sidebar` with **specialization filter buttons**
  - `Search Bar` to search doctors by name
  - **Doctor Profile Cards** with:
    - Doctor image, name, specialization
    - Hover effect for better user experience
    - Status button:
      - Green for "Available" → **"Book Your Appointment"**
      - Red for "Unavailable"

- **Booking Page**:
  - User can fill **Name**, **Email**, **Date & Time**
  - Validations added (error shown if fields are empty)
  - On successful booking → **Success popup message** is shown

- **Appointment View Page**:
  - Shows list of all appointments booked by the user
  - Details displayed: Name, Email, Date, Time
  - **Remove icon** to delete a particular appointment
  - **Back to Booking** button to go back to home page

- **Routing**:
  - All pages are connected using `react-router-dom`
  - Header logo click → Redirects to landing page
  - Header "My Appointments" → Navigates to appointment view page

---

## Technologies Used

###Frameworks & Libraries
- **React.js** – Frontend Framework
- **React Router DOM** – Routing Library
- **Styled Components** – CSS-in-JS Styling Framework

###Additional Technologies
- **JavaScript (ES6+)**
- **LocalStorage** – Used for storing appointments locally
- **Flexbox** – For responsive layout

---

## **Highlights

- Fully responsive layout using `flexbox`
- Hover animations on doctor cards
- Separate card components with dynamic rendering
- Validations with error/success messages
- Used `React Hooks` (`useState`, `useEffect`) for managing state and side effects
- Maintained clean code structure using separate components and styled files

---

## Live Demo

 [Click here to view the live site](https://healthcareappointmentbookingapp.netlify.app/)  
*(Deployed using Netlify)*
##Developer Note

This project was built within the given deadline with real-time experience in mind. While AI tools like **ChatGPT** were used occasionally for styling suggestions or code improvements, the core logic and UI were developed independently. With a bit more time, this can be scaled into a fully functional real-world application.


