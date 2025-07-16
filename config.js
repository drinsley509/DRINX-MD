/*  ______    ___    __    ___     ___
   /  __  \  |   |  |__|   \  \   /  /
  /  /__\  \ |   |   __     \  \ /  /
  |  ____  | |   |  |  |    /  / \  \
  |  |  |  | |   |  |  |   /  /   \  \
  |__|  |__| |___|  |__|  /__/     \__\


ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +50935959059
email;alixexadron7@gmail.com
*/


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUEyTTh5a3dmU2RnYmpRSFBCM05jenBrSDV4ODBFVVdheWlnUVRVaFZtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzFHQ2NOVGVoQ3pjZ09hK1RGd3RhYzZpRG1LZVRxdkpXWHoweTJNcDNWdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQ1dXa0NnVDY0TEVKRDJyWVJwbmxUeDBDL0grbm1yU2VrditacTc5TzNnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXWnNpY0hGZzhwOFlNVnpxVnBwcHMvSWlJcGV0bkNyUGo2Qm9oUGZjUkNBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlDZ3VuU1IvMHEyWXJBVnBPTGRnVndtWnF3VmtuUGRXZ250Zy9iYzk1WDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNIVlU0Z201M3dtUS9mdmltUVRiQTNSYUZzOFZtd0RZZm1aNm1mK3h0bTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0xYdEYzYXAzY1c0M1BFNUNnMVdKclJPS2FJNC8wb2NDUkYwYWZPVTZXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVpOTTBFZEpia3ljMWdob29jcFEzTjgzTnY0cVBydFJhTnRpVHdsMDB4az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFLOXRaeThWcHpaKzJOY215NVZtZkV4QUg0Vm9BaGNuU1plaWhnZmR0eTNJQ1pRaW92SGY0ZWxlUEIydjlGVEJ4YU9SRHhMaGJKWHlucDRKQ3FPVmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJCc05nYXlxYVlOajhmYStxNmxyQVh2S09GS0tqQXFsVXphR3owWk5sSnNVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6ZmFsc2UsImFjY291bnQiOnsiZGV0YWlscyI6IkNKckM4Ym9DRUt5ZzJjTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCUGUwbFlaQ042YjFaTlpOMEdFbVBHR3NuZGhhMWZlKzlWNDE5L2s5R0EwPSIsImFjY291bnRTaWduYXR1cmUiOiJZUzBzL3hvWFFzWUhlcXlBTzdINHgySEFJaWRFSHNrZGdUYnRGZytNM1VleTJFUWt0TzMzWmM0NzNkWmwvVm5ZOFcwdGM4Tk1YaDFKYXJxQXArbzdBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiM2swZXRGd2U2cGJvRGVhYW13V2s4NHdyN3p1YURHNkU0WlRjNGhZUGFJRWZjdUcvWXUyYTJ5YkZnQ005TWdKcW9GaGl4YXI5MHlXUkRzSm5Md0FtaHc9PSJ9LCJtZSI6eyJpZCI6IjUwOTQzMDA4Nzg1OjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNTk3MDg4Mjg3MTMxNjc6MUBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NDMwMDg3ODU6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRVDN0SldHUWplbTlXVFdUZEJoSmp4aHJKM1lXdFgzdnZWZU5mZjVQUmdOIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTI1ODQyNTEsImxhc3RQcm9wSGFzaCI6IjJHNEFtdSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ2tvIn0=",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yw2ty2.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "_Hi 💁🏽 How Can I Assist You. Am alive Now._",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "true",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "『drinx-MD』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
