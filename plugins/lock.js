const { cmd } = require('../command');

cmd({
    pattern: "lockgc",
    alias: ["lock"],
    react: "🔒",
    desc: "Lock the group (Prevents new members from joining).",
    category: "group",
    filename: __filename
},           
async (conn, mek, m, { from, isGroup, isAdmins, isBotAdmins, reply }) => {
    try {
        if (!isGroup) return reply("❌ This command can only be used in groups.");
        if (!isAdmins) return reply("*📛 Only group admins can use this command.*");
        if (!isBotAdmins) return reply("*📛 I need to be an admin to lock the group.*");

        await conn.groupSettingUpdate(from, "locked");
        reply("*✅ Group has been locked. New members cannot join.*");
    } catch (e) {
        console.error("Error locking group:", e);
        reply("❌ Failed to lock the group. Please try again.");
    }
});
cmd({
    pattern: "unlockgc",
    alias: ["unlock"],
    react: "🔓",
    desc: "Unlock the group (Allows new members to join).",
    category: "group",
    filename: __filename
},           
async (conn, mek, m, { from, isGroup, isAdmins, isBotAdmins, reply }) => {
    try {
        if (!isGroup) return reply("❌ This command can only be used in groups.");
        if (!isAdmins) return reply("*📛 Only group admins can use this command.*");
        if (!isBotAdmins) return reply("*📛 I need to be an admin to unlock the group.*");

        await conn.groupSettingUpdate(from, "unlocked");
        reply("✅ Group has been unlocked. New members can now join.");
    } catch (e) {
        console.error("Error unlocking group:", e);
        reply("❌ Failed to unlock the group. Please try again.");
    }
});
