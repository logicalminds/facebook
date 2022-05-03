const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.js');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(8001, function () {
	console.log('JSON Server is running');
});
