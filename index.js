const io = require('socket.io')(3300),
	fs = require('fs'),
	express = require('express'),
	increments = require('increments'),
	spawn = require('child_process').spawn;

	increments.setup({ db: 'mysql://canadian_elect:pz9EaSPa21n2@localhost/canadian_election_2019' });	

var	usersOnline = 0,
	rb = false,
	ips = new Array();
var app = express();
	app.use(express.static(__dirname + '/dist/assets'));
	app.use('/', express.static(__dirname + '/dist'));


	/**
	* Electorial Polls
	**/

		let candidates = {
			'federal': [
				{name: 'Liam Hogan'},
				{name: 'Liam Hogan'}
			]
		};


	for (var key in candidates) {
		for( var candidate in candidates[key] ) {
			increments.poll('canadian_'+key+'_2019', candidate );
		}
	}


	/**
	* The Increments Web Application
	**/

		app.listen(8080, function() {
				build();
		        console.log('Listening on 8080');
		});

		app.get('/', function(req, res) {
			res.send('<a href="/" style="font-family: sans-serif;">Loading...</a>');
		});

		/** API **/

		app.get('/api', function(req, res) {
			res.send('<a href="/" style="font-family: sans-serif;">Loading...</a>');
		});

		app.get('/api/candidates', function(req, res) {
			res.send({'candidates': candidates});
		});

		app.get('/api/candidates/:id', function(req, res) {
			res.send({'candidates': candidates[req.params.id]});
		});

		app.get('/api/statistics', function(req, res) {
			res.send('/api/statistics/:poll Example: <a href="/api/statistics/canadian_federal_2019">/api/statistics/canadian_federal_2019</a>');
		});

		app.get('/api/statistics/:id', function(req, res) {
			increments.statistics(req.params.id, function(l, e) {
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
				console.log(ip + ' voted ' + ballot.candidate + ' in ' + ballot.poll);
				
				if ( ips.indexOf(ip) == -1 ) {
					increments.vote({ poll: ballot.poll, name: ballot.candidate, data: ip });
					ips.push(ip);
				}

			});


			socket.on('statistics', function( poll ) {
				increments.statistics(poll, function(e, f) {
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

		rb = true; var ng;

		if (!/^win/.test(process.platform)) { // linux
		    ng = spawn('ng', ['b'], {
		        // stdio: [null, process.stdout, process.stderr]
		    });
		} else { // windows
		    ng = spawn('cmd', ['/s', '/c', 'ng', 'b'], {
		        // stdio: [null, process.stdout, process.stderr]
		    });
		}

		ng.stdout.on('data', (data) => {
		    console.log(`stdout: ${data}`);
		});

		ng.stderr.on('data', (data) => {
		    console.log( `ng b: ${data}` );
		});

		ng.on('error', function(e) {
			console.log(e);
		})

		ng.on('close', (code) => {
			rb = false;
		});
	}
