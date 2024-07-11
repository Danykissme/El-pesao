let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`${text ? `${text}\n` : ''}┌─「 𝙸𝚗𝚟𝚘𝚌𝚊𝚗𝚍𝚘 𝚊𝚕 𝚐𝚛𝚞𝚙𝚘 」\n` + users.map(v => '│◦❒ @' + v.replace(/@.+/, '')).join`\n` + '\n└────', null, {
        mentions: users
    })
}

handler.help = ['dinamica']
handler.tags = ['grupo']
handler.command = ['tagall''dinamica''todos''invocar']
handler.admin = true
handler.group = true
handler.register = true

export default handler
