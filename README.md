# JaxNode Command Line tool

[![Build Status](https://travis-ci.org/davidfekke/jaxnodenext.svg?branch=master)](https://travis-ci.org/davidfekke/jaxnodenext)

This tool can be used to find the next jaxnode meeting. 
Simply type 'jnn' into your console to find out when and where the next JaxNode meeting will take place.

To install this command line utility, use the following example.

```
npm install -g jaxnodenext
```

To find out when the next meeting will take place, type the following command;

```
> jnn
"The next JaxNode meeting will be on Jan 21, 2016 6:30 PM at Availity"
```
This tool will allow to view the help options using the following command;

```
> jnn --help
  Usage: index [options]

  Options:

    -h, --help     output usage information
    -d, --details  More details about the meetup
    -m, --map      Google Map to Meetup location
    -l, --link     Open the home page url
    -a, --address  Show the venue address
```

The `--details` option will give you the full meeting title and description.

The `--map` option will open up a Google map in your default browser of the venue location for the next meetup.

The `--link` opens up the JaxNode.com website in your default web browser. We display the next meetup information on our home page.

The `--address` displays the venue address for the next meetup.

Copyright JaxNode 2015.