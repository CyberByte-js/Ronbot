module.exports =
{
    name: 'roast',
    description: "fire",
    async execute(client, message, args, Discord)
    {
        var roasts = ['roast 1', 'roast 2', 'roast 3']
        var num = Math.round(Math.random() * (2 - 0) + 0)

        message.reply(roasts[num])
    }
}