const ROLES_FILE = __dirname + "/roles.txt";
const fs = require("fs");

const fileContent = fs.readFileSync(ROLES_FILE, { encoding: "utf-8" });
const roles = JSON.parse(fileContent.trim());
console.log('\nroles:', roles);

module.exports = (scope) => (req, res, next) => {
  if (!scope) {
    return next();
  }

  const role = req.headers["x-role"];
  if (!role) {
    return res.status(403).end();
  }

  const [resource, action] = scope.split(".");

  const theRole = roles.find((item) => item.role === role);
  if (!theRole) {
    return res.status(403).end();
  }

  console.log("request role:", role);
  console.log("accepted scope:", resource, action);

  if (theRole.scopes[resource].includes(action)) {
    return next();
  }

  return res.status(403).end();
};
