const storage = require('node-persist');

module.exports =
{
    name: 'bal',
    description: "the status",
    async execute(client, message, args, Discord)
    {
        await storage.init();

        if (await storage.getItem(`money${message.author.id}`) == null)
            await storage.setItem(`money${message.author.id}`,0)

        message.reply("you have " + await storage.getItem(`money${message.author.id}`) + " broken glass")
    }
}