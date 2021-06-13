const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require("./servicenow-config.json");
const bcrypt = require("bcrypt");

const users = require("./servicenow-config.json");

function init() {
    passport.use(
        new LocalStrategy(
            {
                usernameField: 'username',
                passwordField: 'password'
            },
            async function (username, password, done) {
                const user = users.users.find(u => u.username == username.toLowerCase());
                if (!user) {
                    return done(null, false, { error: 'User not found' });
                }
                const matching = await bcrypt.compare(user.password, password);

                if (!await bcrypt.compare(password, user.password)) {
                    console.log("Incorrect password " + user.password + password);
                    return done(null, false, { error: 'invalid password' });
                }
                const info = { scope: '*' };
                done(null, user, info);
            }
        )
    );


    const opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.JWTToken;
    passport.use(
        new JwtStrategy(opts, function (payload, done) {
            const user = users.users.find(u => u.id == payload);
            if (!user) {
                return done(err, false);
            } else {
                return done(null, user);
            }
        })
    );
}

module.exports = init;