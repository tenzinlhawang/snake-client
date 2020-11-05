let conn;

const handleUserInput = function (key) {
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write('Move: up');
    }
    if (key === 's') {
      conn.write('Move: down');
    }
    if (key === 'a') {
      conn.write('Move: left');
    }
    if (key === 'd') {
      conn.write('Move: right');
    }
    if (key === 't') {
      conn.write('Say: HIII')
    }
    
  
}
const setupInput = function(connect) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  conn = connect;
  stdin.on('data', handleUserInput)
  return stdin;
}

module.exports = {setupInput}