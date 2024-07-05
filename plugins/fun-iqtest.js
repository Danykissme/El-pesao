let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.iq)}`, m)
}
handler.help = ['iqtest']
handler.tags = ['game']
handler.command = /^(iqtest)$/i
handler.register = true


handler.fail = null

export default handler 

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.iq = [
'Tu IQ es de: 1',
'Tu IQ es de: 14',
'Tu IQ es de: 23',
'Tu IQ es de: 35',
'Tu IQ es de: 41',
'Tu IQ es de: 50',
'Tu IQ es de: 67',
'Tu IQ es de: 72',
'Tu IQ es de: 86',
'Tu IQ es de: 99',
'Tu IQ es de: 15',
'Tu IQ es de: 34',
'Tu IQ es de: 42',
'Tu IQ es de: 53',
'Tu IQ es de: 67',
'Tu IQ es de: 78',
'Tu IQ es de: 81',
'Tu IQ es de: 94',
'Tu IQ es de: 10',
'Tu IQ es de: 0',
'Tu IQ es de: 50',
'Tu IQ es de: 75',
'Tu IQ es de: 100👨‍🎓',
]
