let handler = async (m, { conn,usedPrefix, command, text }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
if(!text && !m.quoted) return conn.reply(m.chat, `🛡️ Menciona al infiel.`, m, rcanal)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `🛡️ Menciona al infiel.`, m, rcanal)
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'demote')
await conn.reply(m.chat, `🛡️ El usuario ya no es VIP.`, m, rcanal)
await m.react('✅')
}

}
handler.help = ['survival *@tag*']
handler.tags = ['group']
handler.command = ['survival', 'degradar'] 
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null

export default handler
