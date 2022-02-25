const storage = require('node-persist');

const { MessageEmbed } = require('discord.js');

module.exports =
{
    name: 'shop',
    description: "shop",
    async execute(client, message, args, Discord)
    {
        await storage.init();

        if (await storage.getItem('nftBought') == null)
            await storage.setItem('nftBought',false)

        if (await storage.getItem('nftPrice') == null)
            await storage.setItem('nftPrice',50000000)

        var theText = 'Ron NFT - ' + await storage.getItem('nftPrice') + 'BǤ'

        if (await storage.getItem('nftBought') == true)
            theText = '~~Ron NFT~~ *Bought*'

        const shopEmbed = new MessageEmbed()
	        .setColor('#0099ff')
	        .setTitle('Ron shop')
	        .setDescription('Buy with .buy [item_name](case sensitive and put underscore instead of spaces)')
	        .addFields(
		        { name: theText, value: 'you can sell it back for more to gain profit! ! so cool' },
		        { name: 'Burger in the hot dog bun - 5BǤ', value: 'burger in the hot dog bun' }
	        )
	        .setFooter({ text: 'You have ' + await storage.getItem(`money${message.author.id}`) + 'BǤ'});

        message.channel.send({ embeds: [shopEmbed] });
    }
}