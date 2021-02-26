const {
	prefix,
	token
} = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	console.log(command);

	if (command === 'args-info') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Command name: ${command}\nArguments: ${args}`);
	}

	// if (message.content === `${prefix}ping`) {
	// 	// send back "Pong." to the channel the message was sent in
	// 	message.channel.send('Pong.');
	// } else if (message.content === `${prefix}serve.name`) {
	// 	message.channel.send(`This Server Name Is : ${message.guild.name}`);
	// }
});

client.login(token);