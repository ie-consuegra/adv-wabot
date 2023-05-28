const { default: makeWASocket, DisconnectReason, useMultiFileAuthState } = require('@whiskeysockets/baileys');

async function connectToWhatsApp() {
  const {state, saveCreds } = await useMultiFileAuthState('./bot_sessions');

  const sock = makeWASocket({
    printQRInTerminal: true,
    auth: state,
    defaultQueryTimeoutMs: undefined,
  });

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update
    if(connection === 'close') {
        const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
        console.log('connection closed due to ', lastDisconnect.error, ', reconnecting ', shouldReconnect)
        // reconnect if not logged out
        if(shouldReconnect) {
            connectToWhatsApp()
        }
    } else if(connection === 'open') {
        console.log('opened connection')
    }
  });

  sock.ev.on('creds.update', saveCreds);

  return sock;
}

module.exports = connectToWhatsApp;