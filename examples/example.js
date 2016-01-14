var winston = require('winston');
var slack = require('winston-slack-web').Slack;

// adding the transport
winston.add(winston.transports.Slack, { 
    url: 'https://hooks.slack.com/services/[mykey]', 
    level: 'error',
    channel: 'myapperrors',
    displayname: 'My App Error Bot',
    displayicon: 'https://slack.com/img/icons/app-57.png'
});
winston.error('My error message');

// or using an instance
var logger = new winston.Logger({
    transports: [
        new (winston.transports.Slack)({
            level: 'info',
            url: 'https://hooks.slack.com/services/[mykey]'
        })
    ]
});
logger.info('Informational message');
