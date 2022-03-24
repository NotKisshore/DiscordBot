const {MessageEmbed} =require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { swap_pages2	 } = require(`${process.cwd()}/handlers/functions`);
module.exports = {
	name: "sponsor",
	category: "🔰 Info",
	aliases: ["sponsors"],
	description: "Shows the sponsor of this BoT",
	usage: "sponsor",
	type: "bot",
	run: async (client, message, args, cmduser, text, prefix) => {
		let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
		
	try{
			let embed1 = new MessageEmbed()
		    .setColor(es.color)
		    .setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable1"]))
		    .setURL("http://discord.gg/YtHDAEJWJ3")
		    .setDescription(`Currently Dont Have Sponsor`)
		    .setImage("https://cdn.discordapp.com/avatars/955747177785876480/1b508a89f792bd49c1aaae871bda5a7b.webp")
		    .setFooter("Spirint Dev",  "https://cdn.discordapp.com/avatars/955747177785876480/1b508a89f792bd49c1aaae871bda5a7b.webp")
		
		let embed2 = new MessageEmbed()
			.setColor(es.color)
			.setTimestamp()
			.setFooter("Currently Dont Have Sponsor",  'https://cdn.discordapp.com/avatars/955747177785876480/1b508a89f792bd49c1aaae871bda5a7b.webp')
			.setImage("https://cdn.discordapp.com/avatars/955747177785876480/1b508a89f792bd49c1aaae871bda5a7b.webp")
			.setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable4"]))
			.setURL("http://discord.gg/YtHDAEJWJ3")
			.setDescription(`Currently Dont Have Sponsor`);
			swap_pages2(client, message, [embed1, embed2])
		} catch (e) {
        console.log(String(e.stack).grey.bgRed)
		return message.reply({embeds: [new MessageEmbed()
		  .setColor(es.wrongcolor)
		  .setFooter(client.getFooter(es))
		  .setTitle(client.la[ls].common.erroroccur)
		  .setDescription(eval(client.la[ls]["cmds"]["info"]["color"]["variable2"]))
		]});
    }
  }
}
/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://discord.gg/milrato
  * @INFO
  * Work for Milrato Development | https://milrato.eu
  * @INFO
  * Please mention him / Milrato Development, when using this Code!
  * @INFO
*/
