# MERN Web Apps

<p align="center">
  <img src="mern.png" alt="mongo" height="100" />
</p>

## Content

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Technologies used](#technologies-used)
- [Configuration and Setup](#configuration-and-setup)
- [Author](#author)

## Introduction

A full-stack web application, built using the MERN stack (MongoDB, Express, React, and Node.js), has been specially designed for everyday use. With this application, you can access various useful tools such as Notes, Music Player, Calculator, and Chatroom right from your browser, eliminating the need to install separate applications for simple tasks. Simply access the [Live App](https://tusharbarmase.github.io/web-apps) and start utilizing the different tools or download the [Source code](https://github.com/tusharbarmase/web-apps) and run it on your own server. I am working independently on this project and striving to ensure that everything is done accurately and error-free. I welcome any constructive feedback and appreciate it if you can report any issues.

To Access the Live App: **[Click Here](https://tusharbarmase.github.io/web-apps)**

## Key Features

- Multiple user registration.
- Notes: Easy-to-use interface for creating and organizing notes.
- Calculator: Simple and intuitive interface for basic mathematical operations.
- Music: Ability to play music directly from the browser.
- Chatroom: Real-time communication with other users.

## Technologies used

This project was created using the following technologies.

#### Client

- React JS
- React-router-dom (To handle routing)
- Axios (for making api calls)
- FontAwesome (for Icons)
- date-fns (for date formatting)
- gh-pages (for frontend deployment)

#### Server

- Express
- Mongoose
- cors ( to handle Cross-origin resource sharing )

#### Database

MongoDB (MongoDB Atlas)

## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

#### Open the project in your prefered code editor.

#### Open backend folder

- Open server.js file and change corsOptions to

```
var corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "DELETE", "PATCH"],
};
```

- Create a .env file in the root of your backend directory.
- Supply the following credentials in the .env file

```
MONGO_URI =
PORT = 5000
```

Please follow [This tutorial](https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i) to create your mongoDB connection url, which you'll use as your MONGO_URI

#### Open frontend folder

- change all instances of https://webapp-server.onrender.com with http://localhost:5000.

#### Open Project in your terminal.

- Split your terminal into two (if you are using any code editor) or just open two terminal instances.

In the first terminal

```
$ cd backend
$ npm install (to install server-side dependencies)
& npm start (to start the server)
```

In the second terminal

```
$ cd frontend
$ npm install (to install client-side dependencies)
$ npm start (to start the client)
```

## Comment

I intend to keep adding more features to this application, so if you like it, please give it a star, that will encourage me to keep improving the project.

## Author

- Github: [@tusharbarmase](https://github.com/tusharbarmase)
- Linkedin: [@tusharbarmase](https://www.linkedin.com/in/tushar-barmase-697153257)
- Email: [@tusharbarmase](mailto:tusharbarmase9630@gmail.com)
