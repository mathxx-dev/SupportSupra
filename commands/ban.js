const Discord =  require('discord.js');

module.exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.some(r=>["✰ | C. Discord"].includes(r.name)) )
            return message.reply("desculpe, mas você não tem permissão para usar este comando, entre em contato com um superior para banir este usuário!");
        let member = message.mentions.members.first();
        if(!member)
            return message.reply("por favor mencione um membro deste servidor!")
        if(!member.bannable)
            return message.reply("eu não posso banir este usuário pois ele tem um cargo acima do meu. Entre em contato com um superior pra prosseguir com esta ação!");
        let reason = args.slice(1).join(' ');
        if (!reason) reason = "Nenhuma razão fornecida";
        await member.ban(reason)
            .catch(error => message.reply(`Desculpe ${message.author} não consigo banir este usuário devido ao erro: ${error}`));
        message.reply(`${member.user.tag} foi banido por ${message.author.tag} Motivo: ${reason}`);
}