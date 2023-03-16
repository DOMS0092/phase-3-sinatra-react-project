# Phase 3 Sinatra-React-Project

## The Music App

Welcome to Project 3! My goal for this application is to put it all together and build something from scratch to reinforce what I know and expand the horizons.

The focus of this project is to build a Sinatra API backend that uses Active Record to access and persist data in a database, which will be used by a separate React frontend that interacts with the database via the API.

 With that being said I chose to build a Music application where users can upload and share some of their most loved albums/songs.

## Requirements

- Ruby 2.7.4
- NodeJS (v14 or higher), and npm
- Heroku CLI
- Postgresql


## Setup

Fork and clone this repository 

Then run:

bundle install
rails db:create
npm install --prefix client

You can use the following commands to run the application:

rails s: run the backend on http://localhost:3000
npm start --prefix client: run the frontend on http://localhost:9393
rails start: run the frontend and backend together with one command

## Available Scripts

In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information

## Resources
create-react-app
dbdiagram.io
Postman
