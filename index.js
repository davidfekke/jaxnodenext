#! /usr/bin/env node

var open = require('open'),
	JnnData = require('./lib'),
	program = require('commander'),
	asciify = require('asciify'),
	chalk = require('chalk'),
	path = require('path'),
	pkg = require( path.join(__dirname, 'package.json') ),
	nextMeeting;

program
	.version(pkg.version)
	.option('-d, --details', 'More details about the meetup')
	.option('-m, --map', 'Google Map to Meetup location')
	.option('-l, --link', 'Open the home page url')
	.option('-a, --address', 'Show the venue address')
	.option('-e, --easteregg', 'Tell you friends to \'jnn -e\' LoL!')
	.parse(process.argv);

JnnData.getNextMeeting(function (nextMeeting) {
	asciify('JaxNode', {font:'larry3d', color: 'green'}, function(err, res){ 
		console.log(res); 
		
		var mapurl = 'https://www.google.com/maps/place/' + nextMeeting.meeting.venue.name + '/@' + nextMeeting.meeting.venue.lat + ',' + nextMeeting.meeting.venue.lon + 'z18';
		var meetingText = 'The next JaxNode meeting will be on ' + nextMeeting.meeting.time + ' at ' + nextMeeting.meeting.venue.name;
	
		console.log(meetingText);

		if (program.details) {
			var cleanDescription = nextMeeting.meeting.description.replace(/(&nbsp;|<([^>]+)>)/ig, "");
			console.log( chalk.yellow.bold( nextMeeting.meeting.name + ': ') + chalk.yellow( cleanDescription ));
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
		if (program.easteregg) {
			open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
		}
	});
});

