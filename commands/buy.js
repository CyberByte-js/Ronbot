const { removeExpiredItems } = require('node-persist');
const storage = require('node-persist');

module.exports =
{
    name: 'buy',
    description: "nft",
    async execute(client, message, args, Discord)
    {
        await storage.init();

        if (!args[0])
            message.reply("write what do you want to buy after the command stopid")
        else if (items.includes(args[0]))
        {
            var itemId = items.indexOf(args[0])

            var itemPrice = prices[itemId]

            var helpme = await storage.getItem(`money${message.author.id}`)

            if (helpme >= itemPrice)
            {
                if (await storage.getItem(args[0] + message.author.id) == null)
                    await storage.setItem(args[0] + message.author.id,0)

                /*if (await storage.getItem(`moneyboost${message.author.id}`) == null)
                    await storage.setItem(`moneyboost${message.author.id}`, 1)*/

                if (itemId == 0)
                {
                    await storage.setItem(`money${await storage.getItem('nftOwner')}`, await storage.getItem(`money${await storage.getItem('nftOwner')}`) + itemPrice)
                    
                    await storage.setItem('nftBought',true)
                    await storage.setItem('nftOwner',message.author.id)
                } /*else if (itemId == 1 && await storage.getItem(`moneyboost${message.author.id}`) == 1)
                {
                    await storage.setItem(`boostdate${message.author.id}`, Date.now())
                    await storage.setItem(`moneyboost${message.author.id}`, 1.5)
                    message.reply("your 1.5x times boost was activated ! ! !")
                }*/

                await storage.setItem(args[0] + message.author.id,await storage.getItem(args[0] + message.author.id) + 1)

                await storage.setItem(`money${message.author.id}`, await storage.getItem(`money${message.author.id}`) - itemPrice)

                var trueItem = args[0].replaceAll('_',' ')
            
                message.reply("uh you bought a " + trueItem + " for " + itemPrice + "BǤ and now you have " + await storage.getItem(args[0] + message.author.id) + " of that item")
            } else
                message.reply("ur poor")
        } else
            message.reply('thats not an item see .shop')
            //if (await storage.getItem(args[0] + message.author.id) == null)
            //    await storage.setItem(args[0] + message.author.id,0)

            //await storage.setItem(args[0] + message.author.id, args[0] + message.author.id)
            
            //message.reply("uh you bought a " + args[0] + " and now you have " + await storage.getItem(args[0] + message.author.id) + " of that")
    }
}