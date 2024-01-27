const http = require('http');
const { requestHandlers } = require('./routes')

http.createServer(requestHandlers).listen(8080)