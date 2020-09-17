const Discord =  require('discord.js');

module.exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.some(r=>["✰ | C. Discord"].includes(r.name)) )
            return message.reply("desculpe, mas você não tem permissão para usar este comando, entre em contato com um superior!");
        const deleteCount = parseInt(args[0], 10);
        if(!deleteCount || deleteCount < 1 || deleteCount > 300)
            return message.reply("Por favor, forneça um número entre 1 e 100 para o número de mensagens a serem excluídas");

        const fetched =  await message.channel.messages.fetch({limit: deleteCount});
        message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Não foi possível deletar mensagens devido a: ${error}`));
};