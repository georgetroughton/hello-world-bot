//requirements
let restify = require('restify'),
	builder = require('botbuilder');

//set up restify server
let server = restify.createServer();
server.listen(process.env.PORT || 3000, () => {
	console.log('%s listening to $s', server.name, server.url);
});

//create chat bot
let connector = new builder.ChatConnector({appId: 'id', appPassword: 'password'});
let bot = new buider.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//create bot dialogs
bot.dialog('/', (session) => {
	session.send("Hello World!");
});