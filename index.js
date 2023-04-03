const http = require('http');
const fs = require('fs');

const getFile = (fileName, res) => {
  fs.readFile(fileName, (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data); // write a response to the client
    return res.end(); // end the response
  });
}

// create a server object
http.createServer(function(req, res) {
  if (req.url === '/') {
    getFile('index.html', res);
  } else if (req.url === '/about') {
    getFile('about.html', res);
  } else if (req.url === '/contact-me') {
    getFile('contact-me.html', res);
  } else {
    getFile('404.html', res);
  }
  // res.writeHead(200, {'Content-Type': 'text/html'})
  // res.write(req.url); // write a response to the client
  // res.end(); // end the response
}).listen(8080); // the server object listens on port 8080
