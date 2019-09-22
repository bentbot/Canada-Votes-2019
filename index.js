const fs = require('fs'),
	https = require('https'),
	ca = fs.readFileSync(__dirname + '/src/assets/certs/bundle.ca'),
	server = https.createServer({
		key: fs.readFileSync(__dirname + '/src/assets/certs/priv.key'),
		cert: fs.readFileSync(__dirname + '/src/assets/certs/certificate.crt')
	});
	io = require('socket.io').listen(server),
	express = require('express'),
	increments = require('increments'),
	spawn = require('child_process').spawn,
	args = require('minimist')(process.argv.slice(2));
	server.listen(3300);
var	usersOnline = 0,
	rb = false,
	ips = new Array();
var app = express();
	app.use(express.static(__dirname + '/dist/assets'));
	app.use('/', express.static(__dirname + '/dist'));

increments.setup("mysql://canadian_elect:wek1wplxi8av@127.0.0.1/canadian_election_2019");

	/**
	* Electorial Polls
	**/

		let candidates = {
			'federal': [
				{id: 'ndp', name: 'New Democratic Party', color:'orange'},
				{id: 'liberal', name: 'Liberal Party', color:'red'},
				{id: 'conservative', name: 'Conservative Party', color:'blue'},
				{id: 'green', name: 'Green Party', color:'green'},
				{id: 'peoples', name: "People's Party", color:'purple'},
				{id: 'bloc', name: 'Bloc Québécois', color:'skyblue'}
			]
		};

		increments.poll('canadian_election_2019', candidates['federal'] );


	/**
	* The Increments Web Application
	**/

		app.listen(60000, function() {
				build();
		        console.log('Listening on 60000');
		});

		app.get('/', function(req, res) {
			res.send('<a href="/" style="font-family: sans-serif;">Loading...</a>');
		});

		app.get('/candidates', function(req, res) {
			res.send({'candidates': candidates['federal']});
		});

		app.get('/statistics', function(req, res) {
			increments.statistics('canadian_election_2019', function(l, e) {
				// console.log(e);
				res.send(e);
			});
		});

		fs.watch(__dirname+'/src', { recursive: true }, function(eventType, filename) {
			console.log('Loading...');
			build();
		});


	/**
	* Client Connection
	**/

		io.on('connection', function( socket ) {

			usersOnline = usersOnline+1;
			console.log(socket.request.connection.remoteAddress + ' connected. '+usersOnline+' users online.');

			socket.on('vote', function (ballot) {

				var ip = socket.request.connection.remoteAddress;

				if ( ips.indexOf(ip) == -1 ) {

					increments.vote({ poll: 'canadian_election_2019', name: ballot.name, data: ip });

					ips.push(ip);

					socket.emit('voted', ballot.candidate);

					increments.statistics('canadian_election_2019', function(e, f) {
						io.socket.emit('statistics', f);
					});

					console.log(ip + ' voted ' + ballot.candidate + ' in ' + ballot.poll);

				}

			});


			socket.on('candidates', function() {
				socket.emit('candidates', candidates);
			});

			socket.on('statistics', function() {
				increments.statistics('canadian_election_2019', function(e, f) {
					// console.log(e);
					socket.emit('statistics', f);
				});
			});

			socket.on('disconnect', function() {
				usersOnline = usersOnline-1;
			});
			
		});

	/** Application Building **/

	function build(a) {
		if (rb) return;

		if ( args.render ) {

			rb = true; var ng;

			if ( args.prod ) {
				var arg1 = ['b', '--prod'];
				var arg2 = ['/s', '/c', 'ng', 'b', '--prod'];
			} else {
				var arg1 = ['b'];
				var arg2 = ['/s', '/c', 'ng', 'b'];
			}

			if (!/^win/.test(process.platform)) { // linux
			    ng = spawn('ng', arg1);
			} else { // windows
			    ng = spawn('cmd', arg2);
			}

			ng.on('data', (data) => {
			    console.log(`stdout: ${data}`);
			});

			ng.on('data', (data) => {
			    console.log( `ng b: ${data}` );
			});

			ng.on('error', function(e) {
				console.log(e);
			})

			ng.on('close', (code) => {
				rb = false;
			});

		}
	}
