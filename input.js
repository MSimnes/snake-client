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
  case "w":
    connection.write("Move: up");
    console.log("Move: up");
    break;
  case "a":
    connection.write("Move: left");
    console.log("Move: left");
    break;
  case "s":
    connection.write("Move: down");
    console.log("Move: down");
    break;
  case "d":
    connection.write("Move: right");
    console.log("Move: right");
    break;
  default:
    console.log("Invalid input");
  }
};

module.exports = {
  setupInput
};
