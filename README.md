
## Build

`npm install`

`npm start` will build and host the project at `http://localhost:8080/`

The build will appear at <a href="http://localhost:8080/">http://localhost:8080/</a> and can be opened directly with a browser or routed to a domain with a webserver.

## Backend

Usiually Angular 2 routes requests to a PHP or Ruby backend using HTTP requests. This project forgoes the need of a seperate program and instead creates a small Express server. Spawning a client `ng build` process to render the application and using Socket.IO to communicate with Angular in the browser makes for a stellar team of serve and delivery.
