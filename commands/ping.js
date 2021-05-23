module.exports = {
  name: "ping",
  description: "haha",
  execute(message, args) {
    message.channel.send("pong");
  },
};
