const Meme = require("../../structures/Meme.js");

class Notsure extends Meme {
  constructor(...args) {
    super(...args, {
      name: "skeptical",
      description: "Express your skepticism with Philip J Fry!",
      usage: "skeptical <top text ; bottom text>",
      category: "meme",
      cost: 5,
      aliases: ["fry", "notsure"]
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    const text = args.join(" ");
    if (text.length < 5) return message.response(undefined, `Invalid Command usage: \`${this.help.usage}\``);
    const msg = await message.channel.send(`<a:typing:397490442469376001> **${message.member.displayName}** isn't sure...`);
    const meme = await this.twoMeme(61520, text);
    await msg.edit({
      embed: {
        "title": "Click here if the image failed to load.",
        "url": meme,
        "color": message.guild.me.roles.highest.color || 5198940,
        "image": {
          "url": meme
        },
        "footer": {
          "icon_url": message.author.displayAvatarURL(),
          "text": `Requested by ${message.member.displayName}`
        },
      }
    });
  }
}
module.exports = Notsure;