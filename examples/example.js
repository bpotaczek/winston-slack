var winston = require('winston');
var slack = require('./utils/winston-slack-web').Slack;

winston.add(winston.transports.Slack, { 
    url: 'https://hooks.slack.com/services/[mykey]', 
    level: 'error',
    channel: 'myapperrors',
    displayname: 'My App Error Bot',
    displayicon: 'https://slack.com/img/icons/app-57.png'
});
