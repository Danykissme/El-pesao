let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`┌─────⊷ *Hola Niggas*\n ▢ Grupo:*${groupMetadata.subject}*\n▢ Miembros : *${participants.length}*${text ? `\n▢ Mensaje : ${text}\n`.''}\n` + users.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n` + '└──🖤 SOFIA-BOT🌹──⊷', null, {
        mentions: users
    })
}
handler.help = ('invocar')
handler.tag = ('group')
handler.command = ('dinamica','todos')
handler.admin = true
handler.group = true

export default handler;
