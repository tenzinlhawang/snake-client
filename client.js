const { time } = require('console');
const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    // host: 'localhost',
    // port: 50541
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', data => console.log(data))

  conn.on('connect', () => {
    
    console.log('Connection established');
    conn.write('Name: TLP');

    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, timer);
    // timer += 500;

    setInterval(() => {
      conn.write('Move: up');
    }, 50);   


  })
  return conn;
}

  // console.log('Connecting ...');
  //  connect();

   module.exports = {connect}