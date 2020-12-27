const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzU3OTY0MzU4MTMwMjA0NzMy.X2oDUQ.-lAcYXYLeO4bGv9KKOduXFJjcNg);//BOT_TOKEN is the Client Secret
