let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭═════• ೋ•✧๑♡๑✧•ೋ •═════╮ 

*bot v3 por wolfbot tiene funciones que pertenezcan a las siguentes Empresa(s)|Organizacion(es)|Persona(s):*

 ⚜ 𝑩𝒐𝒄𝒉𝒊𝒍𝑮𝒂𝒎𝒊𝒏𝒈
 𝑮𝒂𝒎𝒆𝒔-𝑾𝒂𝒃𝒐𝒕

 ⚜ 𝑩𝒓𝒖𝒏𝒐𝑺𝒐𝒃𝒓𝒊𝒏𝒐
 𝑻𝒉𝒆 𝑺𝒉𝒂𝒅𝒐𝒘 𝑩𝒓𝒐𝒌𝒆𝒓𝒔

 ⚜ 𝑻𝒐𝒃𝒊
 𝑳𝒐𝒍𝒊𝒛𝒊𝒕𝒂𝑩𝑶𝑻

 ⚜ 𝑨𝒍𝒄𝒂𝒕𝒓𝒂𝒛-𝑻𝒆𝒂𝒎|𝑪𝒐𝒏𝒇𝒖𝑴𝒐𝒅𝒔
 𝑨𝒍𝒄𝑩𝒐𝒕 

 ⚜ 𝑺𝒂𝒎𝒖330
 𝑵𝒚𝒂𝒏𝑩𝒐𝒕

 ⚜ 𝑩𝒐𝒕 𝑻𝒊𝒃𝒖𝒓ó𝒏
 𝑩𝑶𝑻
 
╰═════• ೋ•✧๑♡๑✧•ೋ •═════╯
`.trim() 
//¡GRACIAS!
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '🐱‍🐉 BOT V3 🐱‍🐉', 'status@broadcast')
}
handler.command = /^(creditos|CREDITOS|Creditos|Credito|Crédito)$/i

module.exports = handler
