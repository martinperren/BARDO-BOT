const Discord = require("discord.js");
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const Client = require('node-rest-client').Client;
const Util = require('discord.js');
const music = require('discord.js-musicbot-addon');






client.on("ready", () => {
console.log("Bot iniciado");
	
	client.user.setActivity(process.env.GAME, { type: 'LISTENING' })
	.then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
	.catch(console.error);

});



music.start(client, {
youtubeKey: process.env.YOUTUBE,
botPrefix:"!"
 
});



//   COMANDOS   //   COMANDOS   //   COMANDOS   //   COMANDOS   //   COMANDOS   //   COMANDOS   //   COMANDOS   //   COMANDOS   //   COMANDOS   




client.on("message", async message => {
	const args = message.content.slice(1).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	const argsM = message.content.split(' ');



	if (message.content.includes("huevo")) {
		message.react("537716624296378399");
	}
	
	

});
client.login(process.env.BOT_TOKEN);
