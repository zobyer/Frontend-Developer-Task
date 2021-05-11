# Instructions

### Details about the project

### 1. LogIn Page
For designing purposes an image and a moon is added on the background. Those background images/icons highlight the use of this webapp. Now the image is displayed as a relative position to move it accordingly and part of the image is placed outside the width of the window and overflow is set to hidden to avoid that part. In the same way the moon icon is placed in a suitable place with absolute positioning.  
A form is constructed with two input fields to collect log in credentials from the users. When the user clicks the login button the form calls the handleSubmit method to send the credentials to the server. Here .prevent method is added with @click event to prevent the default behaviour of submit event. When the login button is clicked it calls the handleSubmit method where axios is used to post the inserted data to the server. If the right credentials are passed then server response with email, Id & access token. As the access token is the principal element to contact with the server so it is stored in the localstorage of the browser and the route is set to the homepage of the application. 
On the other hand if the inserted data are invalid then a vue [sweetalert2](https://github.com/avil13/vue-sweetalert2) is used to show a toast notification.When the user successfully lands on the home page a toast notification is generated. Vue route watcher is used to detect the route change to display the notification only after successful login.

### 2. Home Page

Whole Home page is divided into three components:
* Navigation Bar
* Available Medical Devices
* Medical Device Model Data Based on Request

#### Navigation Bar
Instead of anchor tag router-link to used to redirect from one page to another page. flex is used as display property and space is set around the links. Hover and transition effect is used on the router links to make them more attractive.

# task1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
