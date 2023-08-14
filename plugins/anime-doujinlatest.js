import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  try {
  let res = await fetch(`https://api.clayzaaubert.my.id/api/anime/otakudesu-latest?apikey=${global.clayza}`);
  let json = await res.json();
  let data = json.data.slice(0, 10); // Ambil hanya 10 item dari data yang diterima
  let resText = data.map((v) => `*Title:* ${v.title}\n*Hari:* ${v.day}\n*Tanggal:* ${v.date}\n*Thumbnail:* ${v.thumbnail}\n*Link:* ${v.url}`).join('\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n');
  conn.sendFile(m.chat, data[0].thumbnail, 'anunya.jpg', resText, m);
  } catch (error) {
    // Jika terjadi kesalahan lainnya
    conn.reply(m.chat, 'Limit Harian Sudah tercapai', m);
    console.log(error);
  }
};

handler.help = ['doujinlatest'];
handler.tags = ['anime'];
handler.command = /^(doujinlatest)$/i;
handler.limit = true;
export default handler;
