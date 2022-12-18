const chalk = require("chalk");

function LoggerService(req, res, next) {
  console.log(
    "Logged " +
      chalk.bgYellow.bold(req.method) +
      " request for route : " +
      chalk.bgYellow.bold(req.url)
  );
  next();
}

module.exports = LoggerService;
