import { join } from 'path';
import nconf from 'nconf';

const environment = process.env.NODE_ENV || 'development';

const config = nconf
  .env()
  .file({
    file: `${join(__dirname, environment)}.json`
  });

export default config;
