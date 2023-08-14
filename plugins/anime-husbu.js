import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let husbu = `https://api.lolhuman.xyz/api/random/husbu?apikey=d68a5b53977e632db75a83a6`
	conn.sendMessage(m.chat, { image: { url: husbu }, caption: 'Awpokawpaok Gepeng' }, m)
}
handler.command = /^(husbu)$/i
handler.tags = ['anime']
handler.help = ['husbu']
handler.limit = true
export default handler
