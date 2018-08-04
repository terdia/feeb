const express = require("express");
require("./services/passport");

const app = express();

require("./routes/auth")(app);

app.get("/", (request, response) => {
  response.send({ hey: "Hello word fron node app. heroku" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
