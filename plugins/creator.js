function handler(m) {
  this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
  this.sendContact(m.chat, 'https://wa.me/message/W6GFE5ERA6U4I1', 'OFICIAL - JHONM', m)
  //this.sendContact(m.chat, '3128800760', 'OFICIAL - Subayudante', m)
  //this.sendContact(m.chat, 'https://wa.me/message/W6GFE5ERA6U4I1', 'Gata admin', m)
  }
handler.help = ['contacto'] 
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño|dueña)$/i

module.exports = handler
