#!/usr/bin/env node

var http = require('http');

var options = {
	hostname: 'www.jaxnode.com',
	port: 80,
	path: '/api',
	method: 'GET',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
};

var req = http.request(options, function (response)  {
	response.setEncoding('utf8');
	response.on('data', function (chunk) {
		console.log(chunk);
	});
	response.on('end', function() {
		
	});
});

req.end();
console.log('Hello, world!');