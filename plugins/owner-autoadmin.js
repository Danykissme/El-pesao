let handler = async (m, { conn, participants  }) => {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote')
}
handler.help = ['buffeame']
handler.tags = ['owner']
handler.command = /^(buffeame|autoadmin)$/i

handler.rowner = true
handler.group = true
handler.botAdmin = true

export default handler
