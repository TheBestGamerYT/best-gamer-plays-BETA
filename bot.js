const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
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
    msg.channel.send('+------------------------------------+ \n Welcome!\n This is a BETA version of Best Gamer Plays bot !\n List of current commands:\n g$ ping - pong \n g$ help - A help page with a lits of commands \n g$ info - A info page about this bot \n g$ todo - Status page \n +------------------------------------+ ');
  }
  if (msg.content.startsWith(prefix + 'info')) {
    msg.channel.send('STATUS: |Online| \n Current Version: |2.0.0| \n Developed by | TheBestGamerYT | \n This is a BETA version of Best Gamer Plays bot so expect it to be unstable \n JOIN OUR DEV TEAM: |TeamCo7 Developments| or maybe your prefer gaming ? \n JOIN OUR GAMING TEAMS: |TeamCo7 Clan| or |TeamCo7 Community|');
  }
  if (msg.content.startsWith(prefix + 'todo')) {
    msg.channel.send('Planned stuff: \n - Administrative commands(ban,kick,mute) \n - Music Commands(playing music from youtube,pausing,etc..) \n - Expect this list to be fillen in future updated! \n One day this might became a features page instead of todo page');
  }
  if (msg.content.startsWith(prefix + 'administrator')) {
    msg.channel.send('Current Administrative commands are: \n g$ mute - you can mute a choosen player \n g$ kick - you can kick a choosen player g$ ban - you can ban a choosen player');
  }
  if (msg.content.startsWith(prefix + 'music')) {
    msg.channel.send('Current Music Commands are: \n g$ play - select a song name that you wanna hear \n g$ pause - pause the player');
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

client.login(config.token);
