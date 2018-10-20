const isProduction = process.env.NODE_ENV;

if (isProduction === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
