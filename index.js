#! /usr/bin/env node
'use strict';

var open = require('open');
var getNextMeeting = require('./lib');
var program = require('commander');
var asciify = require('asciify');
var chalk = require('chalk');
var path = require('path');
var pkg = require(path.join(__dirname, 'package.json'));


//getNextMeeting(program);

function meetingHasVenue(meeting) {
    return meeting.hasOwnProperty('venue');
}

program
	.version(pkg.version)
	.option('-d, --details', 'More details about the meetup')
	.option('-m, --map', 'Google Map to Meetup location')
	.option('-l, --link', 'Open the home page url')
	.option('-a, --address', 'Show the venue address')
	.option('-e, --easteregg', 'Tell you friends to \'jnn -e\' LoL!')
	.parse(process.argv);

function main(nextMeeting) {
    asciify('JaxNode', { font: 'larry3d', color: 'green' }, function (err, res) {
        console.log(res);

        var mapurl;
        var meetingText;
        if (meetingHasVenue(nextMeeting.meeting)) {
            mapurl = 'https://www.google.com/maps/place/' + nextMeeting.meeting.venue.name + '/@' + nextMeeting.meeting.venue.lat + ',' + nextMeeting.meeting.venue.lon + 'z18';
            meetingText = 'The next JaxNode meeting will be on ' + nextMeeting.meeting.time + ' at ' + nextMeeting.meeting.venue.name;
        } else {
            mapurl = 'https://www.google.com/maps/place/Jacksonville,Flz18';
            meetingText = 'The next JaxNode meeting will be on ' + nextMeeting.meeting.time + '.';
        }

        console.log(meetingText);

        if (program.details) {
            var cleanDescription = nextMeeting.meeting.description.replace(/(&nbsp;|<([^>]+)>)/ig, '');
            console.log(chalk.yellow.bold(nextMeeting.meeting.name + ': ') + chalk.yellow(cleanDescription));
        }
        if (program.map) {
            open(mapurl);
        }
        if (program.link) {
            open('https://www.jaxnode.com');
        }
        if (program.address && meetingHasVenue(nextMeeting.meeting)) {
            console.log(nextMeeting.meeting.venue.name);
            console.log(nextMeeting.meeting.venue.address_1);
            console.log(nextMeeting.meeting.venue.city + ', ' + nextMeeting.meeting.venue.state);
        }
        if (program.easteregg) {
            open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        }
    });
}

getNextMeeting(main);
