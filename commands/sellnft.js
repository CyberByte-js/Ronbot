const storage = require('node-persist');

module.exports =
{
    name: 'sellnft',
    description: "nft trading",
    async execute(client, message, args, Discord)
    {
        await storage.init();

        if (message.author.id != await storage.getItem('nftOwner'))
            message.reply('you arent the owner of the nft noob')
        else if (!args[0])
            message.reply('put for how much you want to sell it after the command dumbass')
        else if (!Number.isInteger(parseInt(args[0])))
            message.reply('thats not a number are you stupid (it has to be an integer too)') 
        else
        {
            await storage.setItem('nftPrice',parseInt(args[0]))
            await storage.setItem('nftBought',false)
            message.reply('you put the nft back in the shop and now it costs ' + args[0] + 'BǤ')
            await storage.setItem(`Ron_NFT${message.author.id}`,0)
        }
    }
}