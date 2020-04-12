const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "g$ "

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('I am online !');
  client.user.setActivity('g$ is prefix', { type: 'PLAYING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'g$ is prefix'}`))
  .catch(console.error);
});

client.on('message', msg => {
  if (msg.content.startsWith(prefix + 'ping')) {
    msg.channel.send('pong');
  }
  if (msg.content.startsWith(prefix + 'help')) {
    msg.channel.send('+------------------------------------+ \n Welcome!\n This is a BETA version of Best Gamer Plays bot !\n List of current commands:\n g$ ping - pong \n g$ help - A help page with a lits of commands \n g$ info - A info page about this bot \n g$ todo - Status page \n g$ administrative - A list of planned administrative commands \n g$ music - A list of planned music commands \n+------------------------------------+');
  }
  if (msg.content.startsWith(prefix + 'info')) {
    msg.channel.send('STATUS: |Online| \n Current Version: |3.0.0| \n Developed by | TheBestGamerYT | \n This is a BETA version of Best Gamer Plays bot so expect it to be unstable');
  }
  if (msg.content.startsWith(prefix + 'todo')) {
    msg.channel.send('Planned stuff: \n - Administrative commands(ban,kick,mute) \n - Music Commands(playing music from youtube,pausing,etc..) \n - Expect this list to be fillen in future updates! \n One day this might became a features page instead of todo page');
  }
  if (msg.content.startsWith(prefix + 'administrative')) {
    msg.channel.send('Current Administrative commands are: \n g$ mute - you can mute a choosen user \n g$ kick - you can kick a choosen user \n g$ ban - you can ban a choosen user');
  }
  if (msg.content.startsWith(prefix + 'music')) {
    msg.channel.send('Current Music Commands are: \n g$ play - select a song name that you wanna listen to \n g$ pause - pause the song');
  }
  if (msg.content.startsWith(prefix + 'mute')){
    msg.channel.send('Coming soon... - Sorry :(');
  }
  if (msg.content.startsWith(prefix + 'kick')){
    msg.channel.send('Coming soon... - Sorry :(');
  }
  if (msg.content.startsWith(prefix + 'ban')){
    msg.channel.send('Coming soon... - Sorry :(');
  }
  if (msg.content.startsWith(prefix + 'play')){
    msg.channel.send('Coming soon... - Sorry :(');
  }
  if (msg.content.startsWith(prefix + 'pause')){
    msg.channel.send('Coming soon... - Sorry :(');
  }
});

client.login(process.env.BOT_TOKEN);
