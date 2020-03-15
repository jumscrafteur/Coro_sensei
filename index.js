require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const {
  prefix
} = require('./config.json');

const setProf = require('./commandes/setProf')



client.once('ready', () => {
  console.log('Coro sensei ready!');
});

client.on('message', async message => {
  let roleProf;
  if (message.channel.type === "dm") return
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  let messageArray = message.content.split(" ");
  let commande = messageArray[0];
  let args = messageArray.slice(1);

  if (commande === `${prefix}setProf`) {
    roleProf = setProf(message, args);
  }

  console.log(roleProf)
});

client.login(process.env.TOKEN);