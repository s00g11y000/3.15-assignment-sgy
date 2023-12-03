const winston = require('winston');

// Create a logger instance
const logger = winston.createLogger({
  level: 'info', // Set log level
  format: winston.format.json(), // Choose log format
  transports: [
    new winston.transports.Console(), // Output to console
    new winston.transports.File({ filename: 'error.log', level: 'error' }), // Log errors to a file
    new winston.transports.CloudWatch({
        logGroupName: 'YourLogGroupName', 
        logStreamName: 'YourLogStreamName', 
        awsAccessKeyId: 'YOUR_ACCESS_KEY_ID', 
        awsSecretKey: 'YOUR_SECRET_ACCESS_KEY', 
        awsRegion: us-east-1, 
    }), // Retrieve cloudwatch log files
      
  ],
});

module.exports = logger;

