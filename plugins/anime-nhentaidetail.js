import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukan Linknya?`
  let res = await fetch(`https://api.clayzaaubert.my.id/api/anime/nhentai-detail?url=${text}&apikey=${global.clayza}`)
  let json = await res.json()
  conn.sendFile(m.chat, json.data.thumbnail, '', json.data.info, m)
}
handler.help = ['nhentaidetail']
handler.tags = ['anime']
handler.command = /^(nhentaidetail)$/i
handler.limit = true

export default handler