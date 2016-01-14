var winston = require('winston');
var util = require('util');
var request = require('request');

var Slack = exports.Slack = function(options) {
    options = options || {};

    if (!options.url) {
        throw new Error('winston-slack-web requires \'url\' property');
    }

    this.url = options.url;
    this.level = options.level || 2;
    this.displayname = options.displayname;
    this.displayicon = options.displayicon;
    this.channel = options.channel;
};

util.inherits(Slack, winston.Transport);

winston.transports.Slack = Slack;

Slack.prototype.log = function(level, msg, meta, callback) {
    var self = this;

    if (level > this.level) {return callback(null, true);}
    
    request({
        method: 'POST',
        url: this.url,
        body: {
            'text': msg,
            'username': this.displayname,
            'icon_url': this.displayicon,
            'channel': this.channel
        },
        json: true
    }, function(error, response, body) {
        if (error) {
            self.emit('error', error);
        }
        if (body !== 'ok') {
            self.emit('error', body);   
        }
        callback(null, true);
    });
};
