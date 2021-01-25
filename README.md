# Duck Data
# Data Collection App To Track where, how much, when and what ducks are being fed.

Deployed Project: https://duckdataapp.herokuapp.com/

This is a data collection app for tracking duck feeding. The data being collected includes: location, time, date, types of food, amounts of food, and the number of ducks being fed.

This applications has been built with React, Node.js/Express.js and MongoDB. State is managed entirely using React Hooks/functional components and data is passed through the React Context API.

To see how functional components/hooks compare with a class components, I have made a very basic exmaple on code sandbox, here is the link: https://codesandbox.io/s/determined-wind-skb0o?file=/src/App.js

The data collected through the form is sent to the Node.js/Express.js server and then stored in the database using Mongoose/MongoDB. All units of measurement submitted are converted into grams so that they are easily totalled together.

The time and date of each submission is generated automatically and stored in the ISO:8601-Date/Time format. Location is also generated automatically, but permission must be given when prompted by the browser. The name of the location is entered manually ini case coordinates are not available.


After submitting data, users have the chance to preview the data and delete if there are incorrect entries. However, once the user navigates away from the page, data can no longer be deleted.

The categories of food are limited only to duck appropiete food, as outlined in the duck feeding guide. This app in no way supports the improper feeding of ducks, and asks all of it's users to follow the proper feeding guidelines.

## Installing / Getting started

To install the project:

Using a new terminal window, cd into the folder you would like to have the project generated in, and either clone or fork from github, or, if you prefer,the github desktop app can also be used. After installation cd into the cloned or forked folder and follow the instructions below to configure the project.

### Initial Configuration
Requirements: Node v12 or later, npm v6 or later.
**If using Node v12, or any version besides 14, be sure to update the "engine" scripts in package.json.
****The note ebaove only applies if you are deploying to heroku

To get the project up and running, just run npm i in the root folder, and then cd "client" and run npm i again. All of the required dependencies will be installed. If you are using yarn as a package manager you will need to delete the package-lock.json folder, then run yarn install in both the root folder as well as the client folder.

***Please note: Before trying to run the project locally you must set up a MongoDB database as well as a .env file with the following:

MONGO_DB_PASS: <enter the password of your dbUser>
MONGO_DB_USER: <enter the mongoDB username>
MONGO_DB_DATABASE: <enter the database name>

The npm package 'dotenv' will be installed when you run npm or yarn install, and the db configuration file is set up to require this dependency if NODE_ENV !== 'production'. Please follow the instructions below to set up your environment variables for production.

If you have any issues setting up the database or configuring the env vars please send me an email and I'd be happy to help. chelsea.angelena@gmail.com
## Developing

Once you have installed all of the dependencies, set up your database, and added the dotenv file, run 'nodemon server.js' from the root folder, and then 'cd client' and 'npm run start' or 'yarn start'.

Nodemon will have been installed as a Dev dependency. If you have nodemon installed globally you can remove this from the package.json.

Alternatively you can install and configure the npm package 'concurrently' to start the project with a single command.
#### Deploying

You can disregard this section, unless you plan to deploy. (It is a bit long - there are more sections below, so just skip over).

I have depolyed this project using heroku. To do the same, make sure you have the heroku CLI installed. The Heroku docs are really great, but if you have any issues, please email me and I can try and help.

Once you have the heroku CLI in place, open a new terminal and navigate to the root folder of your project. Run "heroku login". You will be asked to hit any key to log in and will be redirected to the heroku homepage. Once you are logged in return to the terminal window and then type: "heroku create <project-name>". Heroku will automatically create your new project. From here you will need to configure your production env vars (see the note below). The .env file is only for development and should not be used in production. Make sure it is included in your .git ignore file.

Once your env/config variables are all set up and everything is running smoothly in your dev environment, from the root folder run: "git add -A", or, "git add ." , then,   "git commit -m <"enter commit message"> " and finally: "git push heroku main:master". Alternatively you can configure your heroku git repository to use the "git push heroku main" command. Please see the heroku docs.

The scripts: "heroku-postbuild": "cd client && npm install && npm run build" are located in the package.json will tell heroku to build your node/express app, and then to change in to the client folder and build and deploy the client/react project.

If you are not deploying throgh heroku you can delete these scripts.

Setting up Heroku Env Vars:
(continue to skip unless deploying)

The project will not deploy unless you configure the same environment variables in your heroku app as you have set up in your .env file. You can do this either from the heroku project dashboard, or, using the heroku CLI. The variables you need to configure are:

MONGO_DB_PASS: <enter the password of your dbUser>
MONGO_DB_USER: <enter the mongoDB username>
MONGO_DB_DATABASE: <enter the database name>

**note: these have the same names as the dev environment variables, but they should have different values so that you are not using the same database for both production and dev environments
## Features

CRUD operations: Get, Post, Delete endpoints are configured with the Express/Node.js server.

Dynamically updated location.

Form input and data collection

MongoDB database

React Context API

React Hooks
## Contributing

If you'd like to contribute, please fork the repository and make a new
branch. Pull requests are warmly welcome.
## Links

- Project homepage: "https://duckdataapp.herokuapp.com"

- Repository: "https://github.com/chelsea-angelena/DuckData-React-Express-MongoDB/.git"

- Bugs: "https://github.com/chelsea-angelena/DuckData-React-Express-MongoDB/issues"

## Licensing
The code in this project is licensed under "ISC" license.

### Thanks!!
Thank you for reading this and for checking out my app! Comments, concerns and questions are always welcome.

chelsea.angelena@gmail.com





