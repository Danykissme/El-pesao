let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;DanySR;;\nFN:DanySR⁩\nORG:DanySR⁩\nTITLE:\nitem1.TEL;waid=5350619467:5350619467\nitem1.X-ABLabel:DanySR⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:DanySR⁩\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'DanySR⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
