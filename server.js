/**
 * Created by sinslav on 1/15/17.
 */

const http = require('http');
const { parse } = require('url');

const server = new http.Server();

server.listen(1111, '127.0.0.1');

server.on('request', (req, res) => {
  const parsedUrl = parse(req.url, true);
  if (parsedUrl.pathname === '/echo') {
    console.log(parsedUrl.query.message);
    res.end(parsedUrl.query.message)
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
});
