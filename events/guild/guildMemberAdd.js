const ProfileModel = require('../../models/profileSchema');

module.exports = async(client, discord, member) =>
{
    let profile = await profileModel.create(
        {
            userID: member.id,
            serverID: member.guild.id,
            money: 0
        });
        profile.save();
}