//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ZDZjlLSzluK05mYkhOaXRMVzFXZ2oxT1ByQXh1cUYxWmYzSDBEaElsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVdoY3Q3RFVqUVZLdFhPNU5Jc1E1eEhCdEthQmdaMC9zTE9RdEFlVmxEST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQmZJRThJcDRJT2ZFWEJKZlRReWZVdGUvL0lMVStrZHZKSzBmTTNQRG1vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMa3dkVkErT0VFQW11cTZzOENSaTJsaUorbWk5YlY3SVVQa2lKdHJNbmtrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhEaEhlUU5JTlVrZVlEYUx3SWdTRTRRbHF1TmFQKzJNQ200TVRNWUQ2VVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZLaVg5aFRiRUxJWDhpdjJocW5FUnRaMTlkYlNvcHpkUldzWVNOeTZ3Vms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0RvNVl6MmhNcUdpeC9tZXhzOWs4V3NOSm91dDVLZXVoVVFKYjlRbmNXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSlJONC9mZVFCOWxkbjJkdENLSWRkeG85L0VJVmpwT0tTQkt0NHh1MVVYMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpEeHRvKzg2RnVYZWx1UUgvWE1nN2w4WU5kM0w2WXZEQ2N2b3JEWnI3ckFROWZaR3A1aSs4MjR2VGl3UUFHUlVwMHFvaU5PMlIyeUtDRm9XdEtNbUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjExLCJhZHZTZWNyZXRLZXkiOiI2OWJBZW4vZ2FqVWJSa1drQldEbFNaZlRJTjJ6KzNSUzdVVlNkaUVBWHA0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMzg0MjEwNjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUY0NTAzRjRCQUY0N0U2Q0NDRDNEMjVDQjQ2RTQyNEEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjA4MTIwNH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTAzODQyMTA2MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4RjA5QjBBNzJBNzgxMzM1RjUyMkNDODlGMDdDMzAzQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2MDgxMjEzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MDM4NDIxMDYxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNEREVBNjUzQTNDREFERDQ1MURGQjM5MjcwOUI0RDc2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjYwODEyMjB9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6dHJ1ZX0sImRldmljZUlkIjoiZW80eVBpZERTc0dWTVZ3Y3NKYlZKQSIsInBob25lSWQiOiI0MTI4NDJhNi1hZDNmLTRiNTItYWE2ZC1mZDhjNzE5YTE3OTkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3hQMklOcnFUN0Y3TmZrWTZRbHRkSG15YTJNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUrMGc5akNuMVZZcUMzWDg0TWNWczJIbnl2TT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIxMTlBQ1hLMSIsIm1lIjp7ImlkIjoiMjM0OTAzODQyMTA2MToxMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEYXZpZCBFemVraWVs8J+Yj/CfmI8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tmb2xtVVFwZEdIdHdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImdUUUY0THVZUGI0b2Y2cForRjQzSWsvbVA2M25tZjZZZDRwYUN3NnZMa289IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFpNDcrWFQ3cElMbnZuZEZyN2JCbGhoT1orZDBNbGQrT1V4a1dKNlJnVnRPLzB3OUhDUzZXZG1NNUIxdk9CQkd0eVdCOVNRSzFFYmhjU3hMbGI4d0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvcmNwNU5ZaDlLMndXbExtUmxoSWMxUnVmVUNQeFp5YWNUeWRYZzRTcXNPTngxSnJqNjBTYVlPS01pajU4OGg2d2tXa2M2RVdEQURhNDNEMXFodnJCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMzg0MjEwNjE6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWUUwQmVDN21EMitLSCtxV2ZoZU55SlA1ait0NTVuK21IZUtXZ3NPcnk1SyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjA4MTM5MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDSWEifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
