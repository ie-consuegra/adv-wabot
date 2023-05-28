const answers = {
  welcome: { 
    response: `🙌 Hola, soy Ivanchobot 🤖 tu asistente virtual, soy nuevo en mi trabajo 😉, tengo toda la disposición para ayudarte y seguir aprendiendo.

Para continuar, escribe el número con la opción de tu interés
  *1.* Servicios
  *2.* Información sobre el bot
  *3.* Terminar conversación con el bot`,
  flowOptions: [
    { option: '1', subject: 'services' },
    { option: '2', subject: 'botInfo' },
    { option: '3', subject: 'endBot' },
  ]},

  initMenu: {
    response: `Escribe el número con la opción de tu interés
  *1.* Servicios
  *2.* Información sobre el bot
  *3.* Terminar conversación con el bot`,
  flowOptions: [
    { option: '1', subject: 'services' },
    { option: '2', subject: 'botInfo' },
    { option: '3', subject: 'endBot' },
  ]},

  botInfo: {
    response:`*Características del bot*
  🔹 Seguir un flujo de conversación personalizado
  🔹 Reconocer a los clientes
  🔹 Tomar pedidos o hacer reservas
  🔹 Atender las 24 horas del día, los 7 días de la semana
  🔹 Hablar en múltiples idiomas
  🔹 Enviar links de pago
  🔹 Enviar recordatorios automatizados
Escribe 1 para terminar la conversación con el bot, o 2 para volver al menú inicial. `,
flowOptions: [
  { option: '1', subject: 'endBot' },
  { option: '2', subject: 'initMenu' },
]},

  services: {response: `*Servicios*
  ✨Servicios de Consultoría, Creación y/o Ejecución de Estrategias en Marketing digital
  ⤴ Posicionamiento en motores de búsqueda - SEO
  ❇ Anuncios digitales - Google Ads y Social Media Advertising
  💿 Extracción de contenido y datos de la web - Data Scraping
  📖 Creación de contenido para Web o Social Media
  🌐 Desarrollo de Sitios Web (WordPress o a código)
  🌐 Desarrollo de Aplicaciones Web
  
  *Aplicaciones web*
  🤖 Bot para WhatsApp
  📒 Gestión de ventas e inventario
  🧳 Gestión de reservas
Escribe 1 para terminar la conversación con el bot, o 2 para volver al menú inicial.`,
flowOptions: [
  { option: '1', subject: 'endBot' },
  { option: '2', subject: 'initMenu' },
]},
  endBot: {response: '🤖👍 Nos vemos pronto.',
flowOptions: [
  { option: 'BOT_OFF', subject: 'BOT_OFF'}, // BOT_OFF means nothing
  ]},
};

module.exports = answers;