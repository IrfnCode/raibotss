let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let pay = 'https://telegra.ph/file/cf107c0832a1de96efd57.jpg'
let sewa = `
╭──「 *SEWA* 」
┊• *1 Minggu:* 5K
┊• *1 Bulan:* 20K
┊• *Permanen:* 50K
┠──「 *PREMIUM* 」
┊• *1 Bulan:* 20K
╰────────────๑
┌─「 *Donasi & Payment* 」
│ • *Ovo:* [${global.povo}]
│ • *Dana:* [${global.pdana}]
│ • *Gopay:* [${global.pgopay}]
│ • *Saweria:* [${global.psaweria}]
│ • *Trakteer:* [${global.ptrakterr}]
❏──────────────๑
`
conn.sendMessage(m.chat, { image: { url: pay }, caption: sewa, m})
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^donasi$/i

export default handler
