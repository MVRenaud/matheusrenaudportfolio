const passportJWT = require('passport-jwt');
const User = require('./models/User');

const JWTStrategy = passportJWT.Strategy;

function configureJwtStrategy(passport) {
  passport.use(
    'jwt',
    new JWTStrategy(
      {
        jwtFromRequest: (req) => req.cookies.jwt, // we tell JWTStrategy where to find the token
        secretOrKey: process.env.JWT_SECRET,
      },
      (jwtPayload, done) => (
        User.findById(jwtPayload.sub)
        // performance improvement, not necessary
          .select('_id firstname lastname username email roles')
          .then((user) => done(null, user))
          .catch((err) => done(err))
      ),
    ),
  );
}

module.exports = configureJwtStrategy;
