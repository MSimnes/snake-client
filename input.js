/**
 * Set up user input from the command line.
 * @module input
 */

const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MESSAGES } = require("./constants");

let connection;

/**
 * Set up keyboard input for the game.
 * @function
 * @param {Object} conn - The connection object used to interact with the server.
 * @returns {Object} The object representing the keyboard input.
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  // allow user input to stream in
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  // unpause process.stdin to listen for input in following line
  stdin.resume();
  // take data from stdin and pass it as a parameter to handleUserInput function
  stdin.on("data", handleUserInput);
  // return modified stdin object for use in play.js
  return stdin;
};

/**
 * Handle user input from stdin.
 * @function
 * @param {string} key - The input key from stdin.
 */
const handleUserInput = function(key) {
  switch (key) {
  case "\u0003":
    process.exit();
    break;
  case MOVE_UP_KEY:
    connection.write("Move: up");
    break;
  case MOVE_LEFT_KEY:
    connection.write("Move: left");
    break;
  case MOVE_DOWN_KEY:
    connection.write("Move: down");
    break;
  case MOVE_RIGHT_KEY:
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