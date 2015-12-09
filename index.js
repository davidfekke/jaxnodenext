#!/usr/bin/env node

var http = require('http'),
	open = require('open'),
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
		var mapurl = 'https://www.google.com/maps/place/' + nextMeeting.meeting.venue.name + '/@' + nextMeeting.meeting.venue.lat + ',' + nextMeeting.meeting.venue.lon + 'z18';
		var meetingText = 'The next JaxNode meeting will be on ' + nextMeeting.meeting.time + ' at ' + nextMeeting.meeting.venue.name;
		console.log(meetingText);
		open('http://www.jaxnode.com');
		//open(mapurl);
	});
});

req.end();
