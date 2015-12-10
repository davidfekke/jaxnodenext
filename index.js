#!/usr/bin/env node

var open = require('open'),
	JnnData = require('./lib'),
	nextMeeting;

JnnData.getNextMeeting(function (nextMeeting) {
	//var mapurl = 'https://www.google.com/maps/place/' + nextMeeting.meeting.venue.name + '/@' + nextMeeting.meeting.venue.lat + ',' + nextMeeting.meeting.venue.lon + 'z18';
	var meetingText = 'The next JaxNode meeting will be on ' + nextMeeting.meeting.time + ' at ' + nextMeeting.meeting.venue.name;
	console.log(meetingText);
	open('http://www.jaxnode.com');	
});

