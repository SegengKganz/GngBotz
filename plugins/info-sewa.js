import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pay = 'https://telegra.ph/file/662cd745eb6ca83ff38ed.jpg'
let nomerown = global.nomorown
let info = `
╭━━━━「 *SEWA* 」
┊• *12 hari:* 7K
┊• *30 hari:* 20K
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊• *1 Bulan:* 20K
╰═┅═━––––––๑

┌─ PAYMENT ─┐
│ • Dana: [${global.pdana}]
│ • Pulsa: [${global.ppulsa}]
│ • Qris Di atas ya omku☺
❏────❏
`
conn.sendMessage(m.chat, { image: { url: pay }, caption: info }, m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main','info']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
