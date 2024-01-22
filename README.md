# Express.js + NodeJs + EmailJs

This application constitutes a prototype intended for the development of a server-side application using technologies such as Express.js, NodeJs and EmailJs. 
The main objective is to set up a server that serves the client application by providing methods to retrieve information from the database, with a focus on sending emails to administrators.

These constitute the procedural steps required to perform the cloning of the project and its initiation:
- Create a ```.env``` file based on ```.env.example```
- Execute ```npm i``` to install the packages.
- Execute ```npm run dev``` in the terminal to initiate the application.

## Main implemented routes
- ```http://localhost:3000/api/send``` - This route is responsible for sending an email with the data received from the client through the EmailJs service.


## ENV example
PORT = <br/>
EMAILJS_PUBLIC_KEY = <br/>
EMAILJS_PRIVATE_KEY = <br/>
EMAILJS_SERVICE_ID = <br/>
EMAILJS_TEMPLATE_ID = <br/>

## Live Demo
https://www.startupz.click
