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

#### Available Medical Devices(/modeltype route)
To display all the medical devices at first the data is extracted from the server. Axios get request is used for the data extraction and the extracted data is stored on allmedicaldata. This whole process is written inside the getAllmedicaldevice() method and this method is called from created() hook as we don't need to work on any DOM manipulations. After extracting all the data, inside the template a for loop is used to access through each of the individual data and individual data are sent to the available medical device component. Where a card is made to show information. Name and BrandId are displayed using h3 tag as highlighting these two information and comment, description are displayed using p tag. all the cards are displayed within a given width range to avoid from generating extra large cards. Hover effect is used on them to make them more attractive and beautiful.
All of the cards are displayed using flex property , equal space is distributed between them.

#### Medical Device Model Data Based on Request(/modeldata route)
The task is when a user clicks on a car(Medical Device) it shows all the medical device models on an overlay dialog. A component is created which will act as overlay dialog box to show all the medical device based on model. showdata variable is used to determine when to show the component. If a used click on a card then first it check if the component is already visible or not. If the component is visible then it set the visibility to false and show the user home page. On the contrary if showdata is false then first it extract the from the serve based on the selected medical device(card) then sets the visibility to true and send the related data to the modeldata component. In model data component for loop is used to traverse through all the available data and show them in a HTML table. Overflow property of the dialogue box is set to scroll so that the user can access all the data staying on the same window. Z-index is set to max value to show the dialog box top of all elements of the home page. On the top of the dialog box cancel icon is added to Exclude the div. Clicking on the cancel icon calls the same toggle function to set the visibility to false.

### 3. Add Device
Like the login page here also a form is constructed to take BrandId, Name, Comment, Description input from the users. As the Type Id depends on the /deviceType route. So in order to create a relation between these two entity descriptions remain the same for a single model. At first we fetched all the data from the /deviceType route and stored them in the data. When a user tries to insert the description of the model it shows all the available device descriptions and lets the user select one of them from the list. Based on the selected description typeId, descriptions are sent to setdevice() function where these two data are saved for insertion. Afterwards when the user inserts other values properly v-model is used to store them all.
At last after clicking the Add Device button, form submit method calls insertdevicemodel() and using axios post request is generated where all the relevant data and header are merged with the body and set for insert on the server. If insertion returns a successful result then it shows success notification using sweetalert, again set all the values to empty state so that user can insert new data. But if the server returns any error then it shows an error message and asks the user to insert again.

### 4. Technologies & Reason behid using them
* Frontend Framework: VUE 3
* Frontend Languages: HTML, CSS, Javascript
Typescript is comparely a new language to me and had no experience using them building any webapp. Within these days I gathered basic knowledge about Typescript. As a beginner of Typescript it was quite difficult for me to complete the task in the stated time period. But if I get extra time and opportunity then I will be able to enhance my skill on Typescript.

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
