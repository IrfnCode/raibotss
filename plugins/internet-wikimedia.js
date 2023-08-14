import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) throw `Mau Cari Apa?`;
  let res = await fetch(`https://api.clayzaaubert.my.id/api/search/wikimedia?q=${text}&apikey=${global.clayza}`);
  let anu = await res.json();
  let data = anu.data.slice(0, 10); // Ambil hanya 10 item dari data yang diterima
  let result = data.map((v) => `*Title:* ${v.title}\n*Source:* ${v.source}\n*Image:* ${v.image}`).join('\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n');
  conn.reply(m.chat, result, m);
};

handler.help = ['wikimedia'];
handler.tags = ['internet'];
handler.command = /^(wikimedia)$/i;
handler.limit = true;

export default handler;
