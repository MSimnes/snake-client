const { MOVE_UP_KEY, MESSAGES } = require("./constants");

// initialize a connection variable for use in functions below
let connection;
// function accepts connect object
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function(key) {
  switch (key) {
  case "\u0003":
    process.exit();
    break;
  case MOVE_UP_KEY:
    connection.write("Move: up");
    break;
  case "a":
    connection.write("Move: left");
    break;
  case "s":
    connection.write("Move: down");
    break;
  case "d":
    connection.write("Move: right");
    break;
  default:
    if (MESSAGES[key]) {
      connection.write(`Say: ${MESSAGES[key]}`);
    } else console.log('Invalid input');
  }
};

module.exports = {
  setupInput
};
