const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");
// store the connect function in a variable
const conn = connect();
//pass the reference to the connect object to setUpInput
setupInput(conn);