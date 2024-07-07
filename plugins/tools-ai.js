import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `*Buenas tetas %name ,en que puedo ayudarte hoy :D`, m, rcanal)
await m.react('💬')
try {
let { msg } = await Starlights.openAi(text)
await conn.reply(m.chat, msg, m, rcanal)
} catch {
}}
handler.help = ['sofia *<petición>*']
handler.tags = ['tools']
handler.command = /^(sofia|ai|ia|chatgpt|gpt)$/i
handler.register = true
export default handler
