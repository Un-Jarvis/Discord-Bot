module.exports = (Discord, client, message) => {
  const prefix = process.env.PREFIX;

  // ignore messages from bots
  if (message.author.bot) return;

  // respond to commands
  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd);

    if (command) command.execute(message, args);
  }

  // respond to other info
  if (!message.content.startsWith(prefix)) {
    if (message.content.includes("今天")) {
      message.channel.send("???");
    } else if (message.mentions.users.has(process.env.JARVIS_UID)) {
      message.channel.send("不听不听，王八念经");
    } else if (message.mentions.users.has(process.env.BOT_UID)) {
      message.channel.send("@我干啥");
    } else if (message.content.includes("复读机")) {
      message.channel.send("复读机");
    }
  }
};
