/**
 * The IP address of the server.
 * @constant {string}
 */
const IP = "localhost";

/**
 * The port number of the server.
 * @constant {number}
 */
const PORT = 50541;

/**
 * The keyboard key that moves the snake up.
 * @constant {string}
 */
const MOVE_UP_KEY = "w";

/**
 * The keyboard key that moves the snake left.
 * @constant {string}
 */
const MOVE_LEFT_KEY = "a";

/**
 * The keyboard key that moves the snake right.
 * @constant {string}
 */
const MOVE_RIGHT_KEY = "d";

/**
 * The keyboard key that moves the snake down.
 * @constant {string}
 */
const MOVE_DOWN_KEY = "s";

/**
 * The messages that can be sent to the server using certain keyboard keys.
 * @constant {Object.<string, string>}
 */
const MESSAGES = {
  "t": "Kapow!",
  "u": "Hurry",
  "o": "2Slow!"
};

module.exports = {
  IP,
  PORT,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  MOVE_DOWN_KEY,
  MESSAGES
};