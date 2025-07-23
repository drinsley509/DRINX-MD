const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JnOXJqbnFsMHFscnJzWkxnbjFEQlViSWRpSzdwUGUrS2k2b1hYbm1rST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGlyQytHWi95VGZSMUZtN0xqYWZTQmR6Wk5BV1lQcmIraG5DL2gwdSsxND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRFIvZkdWVklIWWlFbCtzZ3ZFbGpFVnYxdDJLL0xIZ3hiSDRmLzIzSEVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQWNDa0VOWlU5cElSTENvUG9FWjhKbWtVWVlzazQxUkJoN0VtT2lWbVZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVNOGgzaENGODcyV3ZaeEdhZDJaRUFJT1JuRXJxMXM1U2xxZEVXSnZiMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9xL1JoUDlzODB1aFJaWXRzeWZoWDdJZjFNekFYSUVpN2d1MzBHUThnSFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0Y5eDVpcjd1VnFBRXpucnVCSUZNVzIzOHF2L3g2cmJzZmxKRjJNZTFVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0ZKQ05LWXRVc1dtYlIyY0FQTXBqNDUvcTlmQncvM01SVG8yMDg0ajF3Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZmY0FzdzRaVEtjY1Rld1VFZXFkVnBCV1VPcHZmc2F4SDJscDJMankxeDBRRHVOQk1HeVl2MmRUY2pzSGNlQ1I4MzlLcXpiUU9aZE5Nemx4QXoySkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6InpWL29Yb1lBeVpJWElrL1M3ZlBjLzhLRmREdDFyN1RteXlVNmk3d1ZVZEE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BqeDlPc0NFT3ZRZzhRR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik5rcnhaVU1BMW5RaXFNajVZdzBEODlVbUhjeVhhSFhqYVZEWTNKU3dVQ3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImF4M2R3RFpPSEovekwwd1VyQXc3cXE1TnFlR0tGRWtaandBTDNndDNLd1V4eTlNaEVneFdtdHJYVC8yUVM3ZDd4ZnN2Q0tqczQrR0trbnBDV0o0dGdBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhU0NzTXg4d1k1VGJ0OFdwOWVLY1MyTXZ6N2JVdjV1Y2V4QmQ5UmdBT3pmV0J6Qm9kMFdjeDMyL0x3QVVxZXRHQWVndEJmL0NRZmpDdlVpMVBzVjZDdz09In0sIm1lIjp7ImlkIjoiNTA5NDY1Mzc5OTE6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLiuLvigKLwnZm8zLfwnZqbzLdf8J2ajcy38J2am8y38J2aksy38J2al8y38J2aocy3IOC8hFxuXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG7iuLvigKLwnZm8zLfwnZqbzLdf8J2ajcy38J2am8y38J2aksy38J2al8y38J2aocy3IOC8hCIsImxpZCI6IjQ3MzQ4MzIzNDg3OTcyOjdAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQ2NTM3OTkxOjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFpLOFdWREFOWjBJcWpJK1dNTkEvUFZKaDNNbDJoMTQybFEyTnlVc0ZBcyJ9fV0sInBsYXRmb3JtIjoic21iaSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUzMjc4NzczLCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUgzQSJ9',
    PREFIXE: process.env.PREFIX || "~",
    OWNER_NAME: process.env.OWNER_NAME || "Drinx",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "508......",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'Drinx-MD-V1',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/n7vumg.jpeg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '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',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
