import config from './../config';
import winston from 'winston';

const Logger = winston.Logger;
const transports = winston.transports;


const logger = new Logger({
  transports: [
    new transports.Console({
      colorize: true,
      handleExceptions: true,
      timestamp: true,
      prettyPrint: true,
      humanReadableUnhandledException: true,
      showLevel: true
    })
  ]
});

module.exports = logger;
