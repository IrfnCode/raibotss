import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Mau Nanya Apa?`
    let res = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkey}&text=${text}&user=user-unique-id`)
    let zel = await res.json()
   m.reply(zel.result)
}
handler.help = ['openai2','ai2']
handler.tags = ['ai']
handler.command = /^(ai2|openai2)$/i

handler.limit = true
handler.premium = true

export default handler