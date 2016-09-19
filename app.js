//requirements
let restify = require('restify'),
	builder = require('botbuilder');

//set up restify server
let server = restify.createServer();
server.listen(process.env.PORT || 3000, () => {
	
});