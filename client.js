// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8"); // interpret incoming data as text

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", (connect) => {
    console.log("Successfully connected to game server");
  });

  conn.on('connect', (connect) => {
    conn.write('Name: EEG');
    // setTimeout(() => conn.write('Move: up'), 500);
    // setTimeout(() => conn.write('Move: right'), 550);
  });
  return conn;
};

module.exports = { connect };