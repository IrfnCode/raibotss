import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://xyroinee.github.io/audio/lopyou.mp3', "lopyou.opus", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(lopyou|lopyu|loveyou|love|lope)$/i;
handler.command = new RegExp();

export default handler;