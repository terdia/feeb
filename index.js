const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require('body-parser');
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(
  keys.mongoDbCred,
  { useNewUrlParser: true }
);

const app = express();

//parse request 
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
); 

app.use(passport.initialize());
app.use(passport.session());

require("./routes/auth")(app);
require("./routes/billing")(app);

if(process.env.NODE_ENV === 'production') {

  //serve production assest from client build folder
  app.use(express.static('client/build'));

  //serve the index.html file if express don't understand the route
  const path = require('path');
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

}

app.get("/", (request, response) => {
  response.send({ hey: "Hello word fron node app. heroku" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
