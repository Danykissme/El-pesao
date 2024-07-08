import ws from 'ws'
import fetch from 'node-fetch'

async function handler(m, { conn: _envio, usedPrefix }) {
const uniqueUsers = new Map()
  
global.conns.forEach((conn) => {
if (conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED) {
uniqueUsers.set(conn.user.jid.replace(/[^0-9]/g, ''), conn.user)}})

const message = Array.from(uniqueUsers.values()).map((user, index) => `┌  ✩  *${index + 1}* : @${user.jid.replace(/[^0-9]/g, '')}\n│  ✩  *Link* : http://wa.me/${user.jid.replace(/[^0-9]/g, '')}\n└  ✩  *Nombre* : ${user.name || 'SOFIA-BOT'}\n`
  ).join('\n')
  
const replyMessage = message.length === 0 ? "" : message
const totalUsers = uniqueUsers.size;
const responseMessage = `${`᥀🤖୭ *S E R - B O T* ᥀🤖୭\n\n${replyMessage.trim()}`.trim()}`
  
let img = await (await fetch(`https://i.ibb.co/9c9cyW0/file.jpg`)).buffer()

await _envio.sendFile(m.chat, img, 'thumbnail.jpg', responseMessage, m, false, { mentions: _envio.parseMention(responseMessage) })
}
handler.command = ['listjadibot', 'bots']
handler.help = ['bots']
handler.tags = ['serbot']
handler.premium = true
export default handler
