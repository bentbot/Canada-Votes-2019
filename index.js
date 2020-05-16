/*** 
 * Voting Application Setup 
 ***
 * Please begin by running:
 **
 * > npm install
 **
 * And run this application using one of the following commands:
 **
 * > node index.js
 **
 * This will start your voting server and generate a URL and port to visit.
 *
***/




	const increments = require('increments');

	/* Name the poll: */

	const poll = 'canadian_election_2019';
	const title = 'Federal Election';
	const prompt = 'Who would you vote for in the Canadian federal elections?';

	/* Define the running candidates: */

	let candidates = [
		{id: 'ndp', name: 'New Democratic Party', color:'orange'},
		{id: 'green', name: 'Green Party', color:'green'},
		{id: 'bloc', name: 'Bloc Québécois', color:'skyblue'},
		{id: 'liberal', name: 'Liberal Party', color:'red'},
		{id: 'conservative', name: 'Conservative Party', color:'blue'},
		{id: 'peoples_party', name: 'Peoples Party', color:'purple'}
	];

	/* Connect to a MYSQL database:  */

	increments.setup("mysql://canadian_demo:DemoPassword@canadianelections.janglehost.com/canadian_demo");





	/*** Settings ***/
	
	let IPAddressProtection		= false; // Stop double-voting by IP Addr?
	let CookieProtection		= false; // Stop double-voting using browser cookies?
	let AllowRevoting			= true;	// Cookie and IP protection required to be set to `false`.
	
	let AllowViewSource			= true; // Allow users to view the application source code.
	let AllowDataExport			= true;	// Allow users to view exported JSON data.
	let AllowStatistics			= true; // Allow users to view the live statistics
	let SecureSocket			= false; // Use a https:// secure websocket. May req. cetificates.
	let WebPort 				= 8080; // Web port to connect a browser to. Like http://localhost:8080
	let WebSocketPort			= 3300; // Web socket port used to connect to any browsers.
	let RunBuild 				= true; // Automatically run `ng build` upon startup. Set to `false` in production.
	let Debug 					= false;

	/* Time to start the polling application */


	increments.poll( poll, candidates, function (err, model, candidates) {
		console.log(model);
	}, this.Debug);


/* 0.*/
/* Program definitions */
console.log('=== Debug Mode ===\nRun `ng b` to see more details about front-end Angular errors in your app.\nDisable debug mode using the setting in `index.js`.')
  const fs = require('fs'),
	https = require('https'),
	io = require('socket.io')((SecureSocket)?false:WebSocketPort),
	ca = fs.readFileSync(__dirname + '/src/assets/certs/bundle.ca');
	if (SecureSocket) {
		server = https.createServer({
			key: fs.readFileSync(__dirname + '/src/assets/certs/priv.key'),
			cert: fs.readFileSync(__dirname + '/src/assets/certs/certificate.crt')
		});
		server.listen(WebSocketPort);
  		io.listen(server);
  	}

  const express = require('express'),
	spawn = require('child_process').spawn,
	args = require('minimist')(process.argv.slice(2)),
	app = express(); var build_running = false, ips = new Array();

	app.use(express.static(__dirname + '/dist/assets'));
	app.use('/', express.static(__dirname + '/dist'));

/* 1.*/

	/* Web Application */
	app.listen(WebPort, function() {
		console.log('Listening at http://localhost:'+WebPort);
	});

	app.get('/', function(req, res) {
		res.send('<meta http-equiv="refresh" content="3; url=/"><p style="font-family: sans-serif;">Application loading...  [ <a href="/">Retry</a> ]</p>');
	});

	app.get('/candidates', function(req, res) {
		res.send( get_candidates() );
	});

	app.get('/statistics', function(req, res) {
		increments.statistics(poll, function(l, e) {
			res.send(e);
		});
	});
	
/* 2.*/

	/* Client Connection */
	io.on('connection', function( socket ) {

		if (this.Debug) console.log(socket.request.connection.remoteAddress + ' connected.');

		// Send the client the voting prompt & list of candidates.
		socket.on('candidates', function() {
			socket.emit('candidates', get_candidates() );
		});

		// Accept and process a vote.
		socket.on('vote', function (ballot) {

			var ip = socket.request.connection.remoteAddress;

			// Disallow voting if the IP address has already voted.
			if ( ips.indexOf(ip) == -1 || IPAddressProtection == false ) {

				// Add the vote to the database.
				increments.vote({ 'poll': poll, 'name': ballot.name, 'data': ip });

				ips.push(ip); // Add the IP address to a list of used addresses.

				socket.emit('voted', ballot.candidate);

				if (this.Debug) console.log(ip + ' voted.');

				increments.statistics(poll, function(e, stats) {
					io.emit('statistics', stats); // Send statistics to the user.
				});

			}
		});

		// Send the client the poll statistics.
		socket.on('statistics', function() {
			increments.statistics(poll, function(e, stats) {
				socket.emit('statistics', stats);
			});
		});
	});

	function get_candidates(ip) {
		return {
			'poll': poll,
			'title': title,
			'prompt': prompt,
			'candidates': candidates,
			'voted': (ip&&ips.indexOf(ip)==-1) ? false : (IPAddressProtection),
			'debug': Debug,
			'show_statistics':AllowStatistics,
			'cookie_protection':CookieProtection,
			'source_available':AllowViewSource,
			'ip_address_protection':IPAddressProtection,
			'export_available':AllowDataExport,
			'allow_revoting': AllowRevoting
		}
	}

/* 3.*/

	/* Angular build & watch program. */
	fs.watch(__dirname+'/src', { recursive: true }, function(eventType, filename) {
		build();
	});

	// Run the build
	if ( RunBuild ) build();

	function build(a) {
		if (build_running) return;
		if ( args.render ) {
			build_running = true; var ng;
			if ( args.prod ) {
				console.log('Building Angular (production).');
				var arg1 = ['b', '--prod'];
				var arg2 = ['/s', '/c', 'ng', 'b', '--prod'];
			} else {
				var arg1 = ['b'];
				var arg2 = ['/s', '/c', 'ng', 'b'];
				console.log('Building Angular.');
			}
			if (!/^win/.test(process.platform)) {// inux
				ng = spawn('ng', arg1);
			} else {// windows
				ng = spawn('cmd', arg2);
			}
			ng.on('data', (data) => {
				console.log( `ng b: ${data}` );
			});
			ng.on('error', function(e) {
				console.log(e);
			});
			ng.on('close', (code) => {
				rb = false;
			});
		} else {
			/**
			* Build on Load:
			* For development purposes, run `ng b` to build Angular.
			**/
			ng = spawn('ng', ['b']);
			console.log('Commencing Angular build process...');
			build_running = true;
			ng.on('data', (data) => {
				console.log( `ng b: ${data}` );
			});
			ng.on('error', function(e) {
				console.log(e);
			});
			ng.on('close', (code) => {
				console.log('A new build has completed.');
				build_running = false;
			});
		}
	}


