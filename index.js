const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  //console.log(parsedUrl);
  const { query, pathname, search } = parsedUrl;
  const trimmedPath = pathname.replace(/^\/+|\/+$/g, '');
  console.log(query, pathname, trimmedPath, search);
  res.end('Hello World!');
});

server.listen(3000, () => console.log('running on 3000'));
