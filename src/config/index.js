const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    endpoint: process.env.API_URL,
    masterKey: process.env.API_KEY,
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL,
    secretKeyJWT: process.env.SECRET_KEY_JWT
};