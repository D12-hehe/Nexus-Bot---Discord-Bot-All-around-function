const Discord = require("discord.js");
var client
const Modules = require(`../cmds/models/Modules.js`)
const NexusSettings = require(`../cmds/models/NexusSettings.js`)
var {PREFIXMap, NexusVersion} = require(`../core-nexus`)
/*


*/
var EmojiRoleArray = {
    "โค๏ธ": "1033782979031482489",
    "๐งก": "1033783028125794344",
    "๐":"1033783066369462302",
    "๐":"1033783106513162362",
    "๐":"1033783149496373248",
    "๐": "1033783189652635690",
    "๐": "1033783255863926864",
    "๐": "1033783302336819320",
    "๐":"1033783353180172339",
    "๐":"1033783404614914119",
    "๐":"1033783456116773054",
    "๐": "1033826994414166076",
    "๐":"1033783501897605250",
    "๐": "1033783552527048764",
    "๐":"1033783613810020412",
    "๐": "1033783650363396116",
    "โค๏ธโ๐ฉน":"1033783708005703781",
    "๐": "1033783756705759343",
    "๐": "1033783885416374382",
    "๐ค": "1033783933365669898",
    "โฉ๏ธ":"1033784180817002526",
    "๐ฐ": "1033784223800230001",
    "๐ฆ": "1033784283560685588",
    "๐": "1033784334919933992",
    "๐ฝ": "1033784553426387005",
    "๐": "1033784597646946434",
    "โ๏ธ":"1033784648096030850",
    "โ๏ธ": "1033784700893921391",
    "๐ก๏ธ": "1033784748608344074",
    "๐ฆ": "1033784800508653699",
    "๐จ": "1033784852220219472",
    "๐ฎ": "1033784905802469427",
    "๐": "1033784967462928454",
    "๐": "1033785037117735133",
    "๐ค": "1033785088535695411",
    "โ๏ธ": "1033828791371448410",
    "โ๏ธ": "1033828687843434626",
}
//console.log(EmojiRoleArray["โค๏ธ"])
const mongoose = require(`mongoose`)
module.exports.run = async (user, Client, reaction) => {
    client = Client
    try{
      console.log("react command ran!")
      await ReactAndRole(user, reaction)
    }catch(err){
      console.log(err)
      let botlogschannel = await client.channels.cache.get("873587394224459818");
      let DevErrorEmbed = new Discord.MessageEmbed()
      .setTitle("**An error has occurred! โ**")
      .setDescription("**"+ err + "**\n\n" + err.stack)
      .setAuthor(client.user.username)
      .setColor(0xFF0000)
      .setTimestamp(new Date())
      await botlogschannel.send({ embeds: [DevErrorEmbed] })
    }
}
module.exports.help = {
    name: "GiveReactRole"
}   
    
    
    
async function ReactAndRole(user, reaction){
    var Channel = await client.channels.cache.get("1033460728495087616")
    var messagearray = ["1033851392294649947", "1033851883367956531", "1033852146438918256", "1033852604112969749", "1033852604112969749", "1033852731523342406"]
    let member = reaction.message.guild.members.cache.get(user.id);
    let messageid = reaction.message.id
    if (!Channel)return
    if(messagearray.includes(messageid)){
        //console.log(member)
        //console.log(reaction.message)
        let roleid = EmojiRoleArray[reaction.emoji.name]
        let role = reaction.message.guild.roles.cache.get(roleid)
        await member.roles.add(role)
        let roleaddedembed = new Discord.MessageEmbed()
        .setTitle("Role Added!!")
        .setDescription("**Role: " + role.name + " has been added to you!**")
        .setURL("http://bit.ly/33fVhjm")
        .setFooter("Nexus ยฉ - Click the title for a surprise ;)")
        .setColor(0x00FF00)
        try{
          await member.send({embeds: [roleaddedembed]})
        }catch{
            return
            /// dm closed
        }
    }
    ///////////////////////////
}