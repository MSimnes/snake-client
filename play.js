const { connect } = require('./client');
const { setupInput } = require('./input');

/**
 * Print a message to the console indicating that the client is attempting to connect to the server.
 * Then, establish a connection to the server using the `connect()` function from the `./client` module.
 * Finally, call `setupInput()` from the `./input` module, passing in a reference to the connection object.
 */
console.log("Connecting ...");
const conn = connect();
setupInput(conn);