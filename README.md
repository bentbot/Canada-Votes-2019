# Canadian Elections 2019 Poll

## Demo Vote
A demo of this script is available running here: <a href="https://vote.canadianelections.janglehost.com/" target="_blank">Poll: Canadian Federal Elections 2019 (https://vote.canadianelections.janglehost.com)</a>. This script could be run on a standalone voting machine, a web server, or maybe even your application.

## Build

`npm install`

`npm start` will build and host the project at `http://localhost:8080/`

The build will appear at <a href="http://localhost:8080/">http://localhost:8080/</a> and can be opened directly with a browser or routed to a domain with a webserver.

## Create the Database

Customize the MySQL URI in the `increments.setup()`  on line 21 of `index.js`


## Connect the Web Server

 - Create a hostname with Apache and point it to `./dist`. 
 - Update the `socket` lines in `./src/environments/environment.prod.ts` & `./src/environments/environment.ts`
 - Create a new Cron Job for `./start_elections.sh`

## Backend

Usiually Angular 2 routes requests to a PHP or Ruby backend using HTTP requests. This project forgoes the need of a seperate program and instead creates a small Express server. Spawning a client `ng build` process to render the application and using Socket.IO to communicate with Angular in the browser makes for a stellar team of serve and delivery.
