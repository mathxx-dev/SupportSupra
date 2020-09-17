const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const prefix = "s!"

// Console Log de inicialização
client.on ("ready", () => {
    let activities = [
        `Ajudando ${client.users.cache.size} pessoas`,
        `Observando ${client.channels.cache.size} canais`,
        `Utilize s!help para ter acesso aos comandos.`,
        `Dev by: _mathxx#0101`
    ],
    i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: 'STREAMING',
    }), 5000); // WATCHING, LISTENING, PLAYING, STREAMING

    console.log(`Estou online agora! Ajudando ${client.users.cache.size} usuários, em ${client.guilds.cache.size} servidores.`);
});

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(config.prefix)) return;
    if (message.content.startsWith(`<@${client.user.id}`) ||
    message.content.startsWith(`<@${client.user.id}`)) return;

    let args = message.content.split(" ").slice(1);
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);

    try {
        let commandFile = require(`./commands/${command}.js`);
        delete require.cache[require.resolve(`./commands/${command}.js`)];
        return commandFile.run(client, message, args);
    } catch (err) {
        console.error("Erro:" + err);
    }
});


client.login(config.token);