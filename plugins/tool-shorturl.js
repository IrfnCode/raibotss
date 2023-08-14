import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix, args }) => {
  const apiKey = 'SGWN';
  const apiUrl = `https://api.lolhuman.xyz/api/shortlink4?apikey=${apiKey}&url=${encodeURIComponent(args[0])}`;

  if (!args[0]) {
    return conn.reply(m.chat, 'Linknya mana?', m);
  }

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === 200) {
      const shortLink = data.result.link;
      conn.reply(m.chat, `Short link: ${shortLink}`, m);
    } else {
      throw new Error('Failed to shorten URL');
    }
  } catch (error) {
    console.error(error.message);
    conn.reply(m.chat, 'Failed to shorten the URL.', m);
  }
};

handler.help = ['short <url>'];
handler.tags = ['internet'];
handler.command = /^short(url)?$/i;
handler.limit = true;

export default handler;
