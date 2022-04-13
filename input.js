const handleUserInput = function (key) {//does this go inside the setupinput function??
  if (key === '\u0003') {
    process.exit();
    }
  }
  
  const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
  };

  module.exports = { setupInput };
  
  //handleUserInput is only called by setupInput which is already in the same file. 
  // Since handleUserInput does not need to be called or referenced elsewhere, 
  // it does not need to be exported from the input module.