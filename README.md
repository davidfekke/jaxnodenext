# JaxNode Command Line tool

[![Build Status](https://travis-ci.org/davidfekke/jaxnodenext.svg?branch=master)](https://travis-ci.org/davidfekke/jaxnodenext)

![Screenshot of command line](https://raw.githubusercontent.com/davidfekke/jaxnodenext/master/jaxnodesnap.png)



This tool can be used to find the next jaxnode meeting. 
Simply type 'jnn' into your console to find out when and where the next JaxNode meeting will take place.

To install this command line utility, use the following example.

```
npm install -g jaxnodenext
```

To find out when the next meeting will take place, type the following command;

```
> jnn
 _____                       __  __               __             
/\___ \                     /\ \/\ \             /\ \            
\/__/\ \     __      __  _  \ \ `\\ \     ___    \_\ \      __   
   _\ \ \  /'__`\   /\ \/'\  \ \ , ` \   / __`\  /'_` \   /'__`\ 
  /\ \_\ \/\ \L\.\_ \/>  </   \ \ \`\ \ /\ \L\ \/\ \L\ \ /\  __/ 
  \ \____/\ \__/.\_\ /\_/\_\   \ \_\ \_\\ \____/\ \___,_\\ \____\
   \/___/  \/__/\/_/ \//\/_/    \/_/\/_/ \/___/  \/__,_ / \/____/
                                                                 
                                                                 

The next JaxNode meeting will be on Jan 21, 2016 6:30 PM at Availity
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
    -e, --easteregg  Tell you friends to 'jnn -e' LoL!
```

The `--details` option will give you the full meeting title and description.

The `--map` option will open up a Google map in your default browser of the venue location for the next meetup.

The `--link` opens up the JaxNode.com website in your default web browser. We display the next meetup information on our home page.

The `--address` displays the venue address for the next meetup.

The `--easteregg` is, well, you will have to check that one out for yourself.

Copyright [2015] [JaxNode]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     <http://www.apache.org/licenses/LICENSE-2.0>

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

