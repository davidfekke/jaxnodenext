"use strict";

var https = require('https'),
	nextMeeting;

var options = {
	hostname: 'www.jaxnode.com',
	port: 443,
	path: '/api',
	method: 'GET',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
};

var JnnData = function() {};

JnnData.prototype.getNextMeeting = function(cb) {
	var req = https.request(options, function (response)  {
		var result = '';
		response.setEncoding('utf8');
		response.on('data', function (chunk) {
			//console.log(chunk);
			result += chunk;
		});
		response.on('end', function() {
			nextMeeting = JSON.parse(result);
			cb(nextMeeting);
		});
	});
	req.end();
	req.on('error', function(err) {
		console.log(err);
		cb(err);
	});
};

module.exports = new JnnData();