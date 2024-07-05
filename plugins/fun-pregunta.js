let handler = async (m, { command, text }) => m.reply(`
*⁉️ 𝑷𝑹𝑬𝑮𝑼𝑵𝑻𝑨𝑺 ⁉️*
  
*𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰:* ${text}
*𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰:* ${['Awebo si','Tal vez sí','Posiblemente','Probablemente no','Obvio no','Imposible.jpg'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta *<texto>*']
handler.tags = ['fun']
handler.command = /^pregunta|preguntas|apakah$/i
export default handler
