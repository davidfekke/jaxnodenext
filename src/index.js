const open = require('open');
const figlet = require('figlet');
const getNextMeeting = require('../lib');
const chalk = require('chalk');

const {Command, flags} = require('@oclif/command')

class JaxnodenextCommand extends Command {
  async run() {
    let mapurl;
    let meetingText;
    const {flags} = this.parse(JaxnodenextCommand)

    this.log(figlet.textSync('JaxNode!', {
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }));

    const nextMeeting = await getNextMeeting();

    if (nextMeeting.hasOwnProperty('meeting') && meetingHasVenue(nextMeeting.meeting)) {
        mapurl = 'https://www.google.com/maps/place/' + nextMeeting.meeting.venue.name + '/@' + nextMeeting.meeting.venue.lat + ',' + nextMeeting.meeting.venue.lon + 'z18';
        meetingText = 'The next JaxNode meeting will be on ' + nextMeeting.meeting.time + ' at ' + nextMeeting.meeting.venue.name;
    } else {
        mapurl = 'https://www.google.com/maps/place/Jacksonville,Flz18';
        if (nextMeeting.hasOwnProperty('meeting') && nextMeeting.meeting.hasOwnProperty('time')) {
            meetingText = 'The next JaxNode meeting will be on ' + nextMeeting.meeting.time + '.';
        } else {
            meetingText = 'The next JaxNode meeting has not been scheduled.';
        }
    }
    
    this.log(meetingText);
    if (flags.details && nextMeeting.hasOwnProperty('meeting') && nextMeeting.meeting.hasOwnProperty('description')) {
        
        const cleanDescription = nextMeeting.meeting.description.replace(/(&nbsp;|<([^>]+)>)/ig, '');
        this.log(chalk.yellow.bold(nextMeeting.meeting.name + ': ') + chalk.yellow(cleanDescription));
    }
    if (flags.map) {
        open(mapurl);
    }
    if (flags.link) {
        open('https://www.jaxnode.com');
    }
    if (flags.address) {   
        if (nextMeeting.hasOwnProperty('meeting') && meetingHasVenue(nextMeeting.meeting)) {
            this.log(nextMeeting.meeting.venue.name);
            this.log(nextMeeting.meeting.venue.address_1);
            this.log(nextMeeting.meeting.venue.city + ', ' + nextMeeting.meeting.venue.state);
        } else {
            this.log('No address is available yet for the next meeting.')
        }
    }
    if (flags.easteregg) {
        open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
  }
}

JaxnodenextCommand.description = `JaxNodeNext is a CLI tool for JaxNode
...
Use this tool to find the location, time and description of the next JaxNode user group meeting.
`

JaxnodenextCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  details: flags.boolean({char: 'd', description: 'Get the details about the next meeting.'}),
  map: flags.boolean({char: 'm', description: 'Google Map to Meetup location.'}),
  link: flags.boolean({char: 'l', description: 'More details about the meetup.'}),
  address: flags.boolean({char: 'a', description: 'Show the venue address.'}),
  easteregg: flags.boolean({char: 'e', description: 'Tell you friends to \'jnn -e\' LoL!'}),
}

module.exports = JaxnodenextCommand

function meetingHasVenue(nextMeeting) {
    if (nextMeeting.hasOwnProperty('venue')) {
        return true;
    } else {
        return false;
    }
}
