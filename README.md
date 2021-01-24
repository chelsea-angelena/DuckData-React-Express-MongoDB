# Duck Data
# Data Collection App To Track where, how much, when and what ducks are being fed.

This is a data collection app for tracking duck feeding. The data being collected includes: location, time, date, types of food, amounts of food, and the number of ducks being fed.

This applications has been built with React and Node.js/Express.js. State is managed entirely using React Hooks and the code is written without using class components.

To see how functional components/hooks compare with a class components, check out this link: https://codesandbox.io/s/determined-wind-skb0o?file=/src/App.js

The link above works right out of the box and will show an example of how functional compoennts and hooks can produce the same result as class based compoenets, but with slightly less boilerplate.

This app is written with hooks and functional components, but can easily be reconfigured to use class based components, if that is your preference.

The data collected through the form is sent to the Node.js/Express.js server and then stored in the database using Mongoose/MongoDB.

The time and date of each submission is generated automatically and stored in the ISO:8601-Date/Time format. Location is also geenrated automatically, but must be enabled by the user to work. Submissions may be nomaited with the city name only, in which case the coordinates are stored as "0".

After submitting data, users have the chance to preview the data and delete it if there are incorrect entries. However, once the user navigates away from the page, data can no longer be deleted.

The categories of food are limited only to duck appropiete food, as outlined in the duck feeding guide. This app in no way supports the improper feeding of ducks, and asks all of it's users to follow the proper feeding guidelines.

## Installing / Getting started

To install the project:

Using the command line: Open up a new terminal, go to projects folder,  mkdir a new folder and then run "git clone ......" After installation cd into the cloned folder and follow the instructions below to configure the project.

Alternatively, you could use the github desktop program to clone or fork, just follow the instructions in the documentation for that program, but it will be similar to the steps above.
### Initial Configuration
Requirements: Node v12 or later, npm v6 or later.

To get the project up and running, just run npm i in the root folder, and then again in the client folder. All of the dependencies will be downloaded for you. If you are using yarn as a package manager you will need to delete the package-locl.json folder, then run yarn install in both the root folder as well as the client folder.

***Please note: Before trying to run the project locally you must set up MongoDB database as well as  .env file with the following:
MONGO_DB_PASS: <enter the password of your dbUser>
MONGO_DB_USER: <enter the mongoDB username>
MONGO_DB_DATABASE: <enter the database name>

The npm package 'dotenv' will be installed when you run npm or yarn install, and the db configuration file is set up to require this dependency if NODE_ENV !== 'production'. Please follow the instructions below to set up your environment variables for production.

## Developing

Once you have installed all of the dependencies, set up your database, and added the dotenv file, run 'nodemon server.js' from the root folder, and then 'cd client' and 'npm run start' or 'yarn start'.

Nodemon will have been installed as a Dev dependency. If you have nodemon installed globally you can remove this from the package.json.

Alternatively you can install and configure the npm package 'concurrently' to start the project with a single command.
### Building/Deploying
I have depolyed this project using heroku as it is very easy to get up an running with your project Make sure you have the heroku CLI installed. See the documentation for help getting started.

Once you have the heroku CLI in place, from the root folder of your project, run "heroku login". You will be asked to hit any key to log in and will be redirected to the heroku homepage. Once you are logged in return to the terminal window and then type: "heroku create <project-name>". Heroku will automatically create your new project. From here you will need to configure your production env vars (see the note below). The .env file is only for development and should not be used in production. Make sur eit is included in your .git ignore file.

Once your config variables are all set up and everything is running smoothly in your dev set up, open a new terminal window from the root of the folder and run: Git add -A, git commit -m "<enter commit message>" and finally: "git push heroku main:master". Alternatively you can configure your heroku git repository to use the "git push main" command. Please see the heroku docs.

The scripts:
"heroku-postbuild": "cd client && npm install && npm run build"

which are located in the package.json will tell heoku to build your node/express app, and then to change in to the client folder and build and deploy the client/react project.

If you are not deploying throgh heroku you can delete these scripts.

Setting up Heroku Env Vars:

Your project will not work the first time. You have to enter your environment variables either from the heroku project dashbpard, or using the heroku CLI. The variables you need to configure are:

MONGO_DB_PASS: <enter the password of your dbUser>
MONGO_DB_USER: <enter the mongoDB username>
MONGO_DB_DATABASE: <enter the database name>

These should be different than the ones you have set in development, as you do not want to use the same database in dev as you do in production.
## Features

CRUD operations: Get, Post, Delete endpoints are configre dwith the express node.js server.

(Put is still to come!)

Api calls are made using axios, and express validator is set up in the



## Contributing

If you'd like to contribute, please fork the repository and use a feature
branch. Pull requests are warmly welcome.
## Links

- Project homepage: "https://github.com/chelsea-angelena/DuckData-React-Express-MongoDB"

- Repository: "https://github.com/chelsea-angelena/DuckData-React-Express-MongoDB/.git"

- Bugs: "https://github.com/chelsea-angelena/DuckData-React-Express-MongoDB/issues"

## Licensing
The code in this project is licensed under "ISC" license.






