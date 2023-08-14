import fetch from "node-fetch";

let handler = async (m, { conn, text, command, usedPrefix }) => {
	let _fail = `Contoh: *${usedPrefix + command}* jackie chan as neo from matrix, ilustration, highly detailed, artstation`;
	if (!text) throw _fail;
	conn.waifudif = conn.waifudif ? conn.waifudif : {};
	if (m.sender in conn.waifudif)
		throw "Masih Ada Proses Sebelumnya, Silahkan Tunggu Sampai Selesai..";
	else conn.waifudif[m.sender] = true;
	m.reply("_Sedang Di Proses..._");
	try {
		let res = await fetch(
			global.API(`https://api.lolhuman.xyz/api/dall-e?apikey=SGWN&text=${text}`)
		);
		let buffer = await res.buffer();
		conn.sendMessage(m.chat, { image: buffer, caption: 'Nih Kak Hasilnya' }, m);
	} catch (_error) {
		m.reply("Proses Gagal " + _error);
	} finally {
		if (conn.waifudif[m.sender]) delete conn.waifudif[m.sender];
	}
};
handler.help = ['dalle']
handler.tags = ['ai']
handler.command = /^(dalle)$/i

handler.premium = false
handler.limit = true

export default handler