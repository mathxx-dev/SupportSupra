const Discord =  require('discord.js');

module.exports.run = async (client, message, args) => {

        const support = new Discord.MessageEmbed()
        .setColor('#F61F60')
        .setTitle('Assistente Virtual Supra Tokyo')
        .setURL('https://discord.gg/B5Y6RQc')
        .setDescription(`Olá ${message.author}, estou aqui pra auxiliar você com alguns problemas comuns. Peço que selecione qual o problema está enfrentando.`)
        .addFields(
            { name: '1️⃣ - Limbo/Crashs.', value: 'Caso esteja enfrentando algum desse problemas, irei enviar um forma de resolver esse problema!' },
            { name: '2️⃣ - Encontrou algum bug?', value: 'Se você encontrou algum bug, envie para nossa Staff, saiba como!' },
            { name: '3️⃣ - Denuncia contra algum Player ou Staff.', value: 'Se você infelizmente se deparou com algum Anti-RP ou abuso de poder de algum Staff, nos reporte!' },
            { name: '4️⃣ - Solicitar a presença de um Staff.', value: 'Se seu problema for mais grave e precise de um atendimento, irei chamar um amigo meu pra ajudar você! (Pedimos que não use esse comando exageradamente, pois o mesmo notifica os membros da Staff!)' }
            // espaço { name: '\u200B', value: '\u200B' },
        )
        .setTimestamp()
        .setFooter('Obrigado por jogar no Supra Tokyo Roleplay');

        let msg = await message.channel.send(`${message.author}` , support);
        const filter = (reaction, user) => {
            return reaction.emoji.name === '1️⃣', '2️⃣', '3️⃣', '4️⃣' && user.id === message.author.id;
        };

        const collector = msg.createReactionCollector(filter, { time: 15000 });
        collector.on('collect', (reaction, user) => {
            if (reaction.emoji.name === '1️⃣') {
                message.channel.send(`Calma ai, ${message.author} que estarei lhe enviando no seu privado umas dicas ;)`);
            } else if (reaction.emoji.name === '2️⃣') {
                message.channel.send(`Que bom que você está querendo ajudar nosso servidor. Peço que esteja enviando o bug encontrado no canal <#> utilizando o comando !reportarbug. Valeu! ${message.author}`);
            } else if (reaction.emoji.name === '3️⃣') {
                message.channel.send(`Olá ${message.author}, peço que por gentileza envie provas como, vídeo ou foto no canal <#741068685929873410>, lá você enviará as provas para nossa Staff, para que possam verificar o ocorrido e punir, caso necessário a pessoa.`)
            } else if (reaction.emoji.name === '4️⃣') {
                // message.channel.send(`Olá <@&749750486063644863> , pode ajudar o amigo aqui?`)
                var canal = message.guild.channels.cache.find(ch => ch.id === "755964790396158142");
                const msg = canal.send(`Alguém do <@&746772174341275720> ou <@&751142991665561620> pode estar ajudando?` ,
                    new discord.MessageEmbed()
                    .setColor('#F61F60')
                    .addField("Player que está precisando de ajuda no momento:", message.author)
                    .addFields(
                        { name: 'Atendimento!', value: 'Pessoal, o player acima está precisando de ajuda, vocês podem ajudar?!' }
                    )
                    .addField("Caso atenda a solicitação do usuário, reaga está mensagem com um verificado, valeu!")
                    .setFooter("ID do Player: " + message.author.id)
                    .setTimestamp()
                );
                message.channel.send(`Aguarde alguns instantes ${message.author}, sua solicitação foi enviada para nossa equipe. Para agilizar o processo, peço que aguarde na sala Aguardando!`);
            }
        });   
            
        // reações 
        await msg.react('1️⃣')
        await msg.react('2️⃣')
        await msg.react('3️⃣')
        await msg.react('4️⃣')
};