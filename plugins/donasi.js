let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let pay = 'https://telegra.ph/file/662cd745eb6ca83ff38ed.jpg'
let sewa = `
╭─❀ SEWA ❀─╮
┊ • 1 Minggu: 7k
┊ • 1 Bulan: 20k
┠─❀ PREMIUM ❀─┨
┊ • 1 Bulan: 25k
╰───❀───╯
┌─❀ Donasi & Payment ❀─┐
│ • Dana: [${global.pdana}]
│ • Pulsa: [${global.ppulsa}]
│ • Qris Di atas ya om😇
❏──❀──❏
`
conn.sendMessage(m.chat, { image: { url: pay }, caption: sewa}, m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^donasi$/i

export default handler
