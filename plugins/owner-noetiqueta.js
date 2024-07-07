let handler = async (m, { conn, usedPrefix, isOwner }) => {
await m.react('😺')
await conn.reply(m.chat, `Hola @${m.sender.split`@`[0]} si necesitas la ayuda de mi creador porfavor escribele al privado\n*- Solo asuntos importantes -*`, estilo, { mentions: [m.sender] })
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;DanySR;;\nFN:DanySR\nORG:DanySR⁩\nTITLE:\nitem1.TEL;waid=5350619467:5350619467\nitem1.X-ABLabel:DanySR\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:DanySR\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'DanySR', contacts: [{ vcard }] }}, {quoted: m})
}
handler.customPrefix = /^(@5350619467|@5350619467|@5350619467)$/i
handler.command = new RegExp
export default handler
