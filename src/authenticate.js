const passport = require('passport');
const User = require('./models/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');

const { secretKeyJWT } = require('./config/index');

exports.getToken = (user) => {
    return jwt.sign(user, secretKeyJWT,
        { expiresIn: 3600 });
};

let options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = secretKeyJWT;

exports.jwtPassport = passport.use(new JwtStrategy(options,
    (jwt_payload, done) => {
        console.log("JWT payload: ", jwt_payload);
        User.findOne({ _id: jwt_payload._id }, (error, user) => {
            if (error) {
                return done(error, false);
            }
            else if (user) {
                return done(null, user);
            } else {
                return (null, false);
            }
        })
    }));

exports.verifyUser = passport.authenticate('jwt', {session: false});

