const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const passport = require('passport');

dotenv.config();
const app = express();
app.disable('x-powered-by');

// middleware stack
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: true,
  }),
);
// read the cookie and add it to the request object under the prop "cookies"
app.use(cookieParser());
app.use(passport.initialize());
const path = require('path');

const configureJwtStrategy = require('./passport-config');

configureJwtStrategy(passport);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => {
    console.log('we are connected to the database.');
  })
  .catch((error) => {
    console.log('an error occurred while connecting ot the db', error);
  });

const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes);

// !! Your middleware should not go below this line !!
// Serve frontend client/build folder
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

// const port = process.env.NODE_ENV === 'production' ? 'https://matheusrenaudportfolio.herokuapp.com' : 'http://localhost:4000';

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
