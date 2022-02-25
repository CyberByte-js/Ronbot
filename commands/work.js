const storage = require('node-persist');

module.exports =
{
    name: 'work',
    description: "trabalhe, seu mortal",
    async execute(client, message, args, Discord)
    {
        await storage.init();

        if (talkedRecently.has(message.author.id)) {
            message.reply("dont spam dumbass theres a 3 second cooldown");
        } else {
        
            var num = Math.round(Math.random() * (10 - 1) + 1)

            if (await storage.getItem(`money${message.author.id}`) == null)
                await storage.setItem(`money${message.author.id}`,0)

            /*if (await storage.getItem(`moneyboost${message.author.id}`) == null)
                await storage.setItem(`moneyboost${message.author.id}`,1)*/

            await storage.setItem(`money${message.author.id}`,await storage.getItem(`money${message.author.id}`) + num)

            message.reply("you worked on smth and got " + num + " broken glass (you have " + await storage.getItem(`money${message.author.id}`) + " in total)");

            talkedRecently.add(message.author.id);
            setTimeout(() => 
            {
            talkedRecently.delete(message.author.id);
            }, 3000);
        }

        //if (await storage.getItem(`boostdate${message.author.id}`) != null && boostCooldown - (Date.now() - await storage.getItem(`boostdate${message.author.id}`) <= 0))
        //    message.reply("your boost is gone :(((((")
    }
}