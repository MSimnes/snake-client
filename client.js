/**
 * Module for connecting to the Snake game server.
 * @module client
 */

const net = require("net");
const { IP, PORT } = require('./constants');

/**
 * Connects to the Snake game server.
 * @function connect
 * @returns {Object} The connection object used to interact with the server.
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding("utf8");
  
  /**
   * Event handler for when the connection to the server is established.
   * @event connect
   */
  conn.on("connect", () => {
    conn.write("Name: MLS");
  });
  
  /**
   * Event handler for when data is received from the server.
   * @event data
   * @param {string} data - The data received from the server.
   */
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect
};