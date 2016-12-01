import nconf from 'nconf';
import { join } from 'path';

const environment = process.env.NODE_ENV || 'development';

const config = nconf
  .env()
  .file({
    file: `${join(__dirname, environment)}.json`
  });

module.exports = config;
