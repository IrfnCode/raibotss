import fetch from 'node-fetch';
import cheerio from 'cheerio';

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Nyari apa?';

  let res = await fetch(`https://wall.alphacoders.com/search.php?search=${encodeURIComponent(text)}`);
  if (!res.ok) throw 'Terjadi kesalahan dalam memproses permintaan.';

  let html = await res.text();
  let $ = cheerio.load(html);

  let imageUrls = [];
  $('.boxgrid a').each((index, element) => {
    let imageUrl = $(element).find('img').attr('src');
    if (imageUrl) {
      imageUrls.push(imageUrl);
    }
  });

  if (imageUrls.length === 0) {
    throw 'Tidak ada wallpaper yang ditemukan.';
  }

  let randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

  let imageRes = await fetch(randomImageUrl);
  if (!imageRes.ok) throw 'Gagal mengambil gambar wallpaper.';

  let imageBuffer = await imageRes.buffer();

  await conn.sendMessage(m.chat, imageBuffer, 'image/jpeg', {
    quoted: m,
    caption: `
*WH-MODS-BOT-V1 WALLPAPER*
🔎 *Result:* ${text}
🌎 *Sumber Asli:* https://wall.alphacoders.com
⛩ *ɴᴀᴍᴇ ᴜꜱᴇʀ:* ${conn.getName(m.sender)}
    `,
  });
};

handler.help = ['wallpaperq <query>'];
handler.tags = ['anime'];
handler.command = /^wall(paper)?q?$/i;

export default handler;
