const dotenv = require('dotenv');

dotenv.config();

const config = {
    PORT: process.env.PORT,
    databaseUrl: process.env.DB_URL
}

module.exports = config;