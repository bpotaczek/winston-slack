
A email transport for [winston][0].

## Installation

``` sh
$ npm install winston
$ npm install winston-slack
```
Setup an incoming webhook into your application
https://my.slack.com/services/new/incoming-webhook/

## Usage
``` js
var winston = require('winston');

/*
 * Requiring `winston-slack` will expose
 * `winston.transports.Slack`
 */
require('winston-slack').Slack;

winston.add(winston.transports.Slack, options);
```

The Slack transport has the following options.

* __url:__ The incoming hook url. *[required]*
* __level:__ Level of messages that this transport should log.
* __displayname:__ The username to display the message from (default will use webhook name).
* __displayicon:__ An optional custom icon.
* __channel:__ The channel to post to (if different than webhook's channel).

## License
The MIT License (MIT)

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.