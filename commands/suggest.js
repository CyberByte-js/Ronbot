module.exports =
{
    name: 'suggest',
    description: "suggest items",
    async execute(client, message, args, Discord)
    {
        if (!args[0])
            message.reply("are you dumb you have to actually write what item you want to suggest")
        else
        {
            var messageShort = message.toString().replace('.suggest ', '')
            client.channels.cache.get(`946415639512383498`).send(messageShort)

            message.reply("suggestion sent in <#946415639512383498>")
        }
    }
}