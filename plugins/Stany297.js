const axios = require('axios');
const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "patner",
    alias: ["thanks", "dev"],
    desc: "thanks to dev for helping",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},
async (conn, mek, m, { from }) => {
    try {
        const message = `
╭─❏ *𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑𝐒 :*
│👨‍💻 𝙼𝚈 𝚂𝙴𝙻𝙵 👨‍💻
│👨‍💻 𝙻𝙾𝙰𝚁𝙳 𝙹𝙾𝙺𝙴𝚁 👨‍💻
│👨‍💻 𝚁𝙴𝙳 𝚃𝙴𝙲𝙷  👨‍💻
│🎭 𝚂𝚞𝚙𝚛𝚎𝚖𝚎 𝙳.𝙳𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚘𝚛 🎭
│───────────────────────
│🤖 *𝙱𝙾𝚃 𝙽𝙰𝙼𝙴:* 𝚂𝚃𝙰𝙽𝚈 𝚃𝚇𝙼
│───────────────────────
│🙋‍♂️ 𝙷𝙴𝙻𝙻𝙾 @${m.sender.split("@")[0]}
╰─────────────────────❏
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ Stany Tech*`;

        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/frns4k.jpg` },
            caption: message,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363419349938381@newsletter',
                    newsletterName: 'STANY-TECH',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });


    } catch (err) {
        console.error("ThanksTo Error:", err);
        await conn.sendMessage(from, { text: `Error: ${err.message}` }, { quoted: mek });
    }
});
