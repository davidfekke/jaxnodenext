#!/usr/bin/env node

var open = require('open'),
	JnnData = require('./lib'),
	program = require('commander'),
	nextMeeting;

program
	.option('-d, --details', 'More details about the meetup')
	.option('-m, --map', 'Google Map to Meetup location')
	.option('-l, --link', 'Open the home page url')
	.option('-a, --address', 'Show the venue address')
	.parse(process.argv);

JnnData.getNextMeeting(function (nextMeeting) {
	var mapurl = 'https://www.google.com/maps/place/' + nextMeeting.meeting.venue.name + '/@' + nextMeeting.meeting.venue.lat + ',' + nextMeeting.meeting.venue.lon + 'z18';
	var meetingText = 'The next JaxNode meeting will be on ' + nextMeeting.meeting.time + ' at ' + nextMeeting.meeting.venue.name;
	console.log(meetingText);
	if (program.details) {
		console.log(nextMeeting.meeting.name + ':' + nextMeeting.meeting.description);
	}
	if (program.map) {
		open(mapurl);
	}
	if (program.link) {
		open('http://www.jaxnode.com');	
	}
	if (program.address) {
		console.log(nextMeeting.meeting.venue.name);
		console.log(nextMeeting.meeting.venue.address_1);
		console.log(nextMeeting.meeting.venue.city + ', ' + nextMeeting.meeting.venue.state);
	}
});

