const bunyan = require('bunyan');

module.exports = bunyan.createLogger({
    name: "snowstorm",
    level: "info",
    serializers: bunyan.stdSerializers,
    streams: [{
        path: '.output.log',
    },
    { stream: process.stdout }
    ]
});
