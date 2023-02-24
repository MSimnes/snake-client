const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Name: MLS");
    // setTimeout(() => {
    //   console.log("Move: right");
    //   conn.write("Move: right");
    // }, 1000);
    // setTimeout(() => {
    //   console.log("Move: up");
    //   conn.write("Move: up");
    // }, 2000);
    // setTimeout(() => {
    //   console.log("Move: left");
    //   conn.write("Move: left");
    // }, 3000);
    // setTimeout(() => {
    //   console.log("Move: down");
    //   conn.write("Move: down");
    // }, 4000);
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};
module.exports = {
  connect
};