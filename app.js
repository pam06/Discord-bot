//discord variable holding discord.js module
const discord = require("discord.js");

//configuring .env file
const dotenv = require("dotenv")
dotenv.config()

//new client object with its intents and partials
const client = new discord.Client({
    intents: [
        discord.GatewayIntentBits.DirectMessages, //creating message
        discord.GatewayIntentBits.MessageContent, //reading message
        discord.GatewayIntentBits.GuildMembers,
        discord.GatewayIntentBits.GuildMessages,
        discord.GatewayIntentBits.Guilds
    ],
    partials: [
        discord.Partials.Channel,
        discord.Partials.GuildMember,
        discord.Partials.Message,
        discord.Partials.User
    ]
});


//when the bot is on and ready console logs the message
client.on("ready", (c) => {
    console.log("The bot is online " + c.user.tag);
});

//Creating messages
client.on("messageCreate", (message) => {
    if (message.author.bot) {
        return;
    }

    if (message.content === "/hello") {
        message.reply("Hello! <@" + message.author.id + ">" );
    }
});

//give life to the bot
client.login(process.env.TOKEN);