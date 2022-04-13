let connection;

const handleUserInput = function (key, connection) {//does this go inside the setupinput function??
  if (key === '\u0003') {
    process.exit();
    }
  if (key === 'w') {
    connection.write('Move: up')
  }
  if (key === 'a') {
    connection.write('Move: left')
    }
  if (key === 's' ) {
    connection.write('Move: down')
    }
  if (key === 'd') {
    connection.write('Move: right')
    }
  }
  
  // setTimeout(() => conn.write('Move: up'), 500);
    // setTimeout(() => conn.write('Move: right'), 550);
  
  const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", (data) => { 
      handleUserInput(data, connection)} );
    return stdin;
  };

  module.exports = { setupInput };

  //handleUserInput is only called by setupInput which is already in the same file. 
  // Since handleUserInput does not need to be called or referenced elsewhere, 
  // it does not need to be exported from the input module.