const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (request, response) => {
    request.logout();
    response.send('You have been logged out');
  });

  app.get("/api/user", (request, response) => {
    response.send(request.user);
  });
};
