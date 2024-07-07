import db from '../lib/database.js'
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {
	
	if (!text) return m.reply(`🛡️ Ingresa el enlace del Grupo.`)
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) return m.reply('❌ Enlace invalido.')
    let res = await conn.groupAcceptInvite(code)
    expired = Math.floor(Math.min(999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
    m.reply(`✅ Me uní correctamente al Grupo *${res}${expired ? `* Durante *${expired}* días.` : ''}`)
    let chats = global.db.data.chats[res]
    if (!chats) chats = global.db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24
    let pp = 'https://telegra.ph/file/4fa3f65b6698517cd8dcf.mp4'
   await conn.sendMessage(res, { video: { url: pp }, gifPlayback: true, caption: 'Arrodillence perras, ya llego su Dios.', mentions: [m.sender] }, { quoted: estilo })
}
handler.help = ['join *<link> <días>*']
handler.tags = ['owner']

handler.command = ['join', 'entrar'] 
handler.owner = true

export default handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))
