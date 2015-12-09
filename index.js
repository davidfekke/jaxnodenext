#!/usr/bin/env node

var http = require('http'),
	nextMeeting;

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
	var result = '';
	response.setEncoding('utf8');
	response.on('data', function (chunk) {
		result += chunk;
	});
	response.on('end', function() {
		nextMeeting = JSON.parse(result);
		var meetingText = 'The next JaxNode meeting will be on ' + nextMeeting.meeting.time + ' at ' + nextMeeting.meeting.venue.name;
		console.log(meetingText);
	});
});

req.end();
