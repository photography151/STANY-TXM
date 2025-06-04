const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const config = require('../config');

cmd({
    pattern: "uptime",
    alias: ["runtime", "run"],
    desc: "Show bot uptime with stylish formats",
    category: "main",
    react: "⏱️",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const uptime = runtime(process.uptime());
        const startTime = new Date(Date.now() - process.uptime() * 1000);
        
        // Style 1: Classic Box
        const style1 = `╭───『 UPTIME 』───⳹
│
│ ⏱️ ${uptime}
│
│ 🚀 Started: ${startTime.toLocaleString()}
╰────────────────⳹
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ Stany tech*`;


        // Style 3: Fancy Borders
        const style3 = `▄▀▄▀▄ STANY TXM UPTIME ▄▀▄▀▄

  ♢ Running: ${uptime}
  ♢ Since: ${startTime.toLocaleDateString()}
  
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ Stany tech*`;

        // Style 4: Code Style
        const style4 = `┌──────────────────────┐
│  ⚡ UPTIME STATUS ⚡  │
├─────────────────────
│ • Time: ${uptime}
│ • Started: ${startTime.toLocaleString()}
│ • Version: 1.0.0
└──────────────────────┘`;

        // Style 5: Modern Blocks
        const style5 = `▰▰▰▰▰ UPTIME ▰▰▰▰▰

  ⏳ ${uptime}
  🕰️ ${startTime.toLocaleString()}
  
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ Stany Tech*`;

        // Style 6: Retro Terminal
        const style6 = `╔══════════════════════╗
║   STANY TXM UPTIME    
╠══════════════════════
║  RUNTIME: ${uptime}
║  SINCE: ${startTime.toLocaleString()}
╚══════════════════════╝`;

    

        // Style 8: Social Media Style
        const style8 = `⏱️ *Uptime Report* ⏱️

🟢 Online for: ${uptime}
📅 Since: ${startTime.toLocaleString()}


> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ Stany Tech*`;

        
        // Style 10: Professional
        const style10 = `┏━━━━━━━━━━━━━━━━━━┓
┃  STANY-TXM 
┗━━━━━━━━━━━━━━━━━━┛

◈ Duration: ${uptime}
◈ Start Time: ${startTime.toLocaleString()}
◈ Stability: 100%
◈ Version:  1.0.0

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ Stany Tech*`;

        const styles = [style1, style3, style4, style5, style6, style8, style10];
        const selectedStyle = styles[Math.floor(Math.random() * styles.length)];

        await conn.sendMessage(from, { 
            text: selectedStyle,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363399268034293@newsletter',
                    newsletterName: 'STANY-TECH GAMBLING',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Uptime Error:", e);
        reply(`❌ Error: ${e.message}`);
    }
});
