import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command, text, args }) => {
  if (!args[0]) throw `Usage example: ${usedPrefix}${command} neko`;
  let res = await fetch(`https://api.lolhuman.xyz/api/pinterest?apikey=d68a5b53977e632db75a83a6&query=${encodeURIComponent(args[0])}`);
  if (!res.ok) throw await res.text();
  let json = await res.json();
  if (!json.url) throw 'Error!';
  conn.sendFile(m.chat, json.url, '', '© 2023 Clayza Aubert', m);
};

handler.tags = ['anime'];
handler.help = ['pic <category>'];
handler.command = /^pic$/i;
handler.premium = false;
handler.limit = false;

export default handler;
