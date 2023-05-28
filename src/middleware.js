// const connectToWhatsApp = require('./connection');

const chatbot = require("./chatbot");

const middleware = async (connection) => {
  connection.ev.on('messages.upsert', async ({ messages }) => {
    const { key, message } = messages[0];
    const { remoteJid } = key;
    const { conversation } = message

    // conversation has something if the message is pure text and
    // was sent by other person
    if (conversation) {
      const response = chatbot(remoteJid, conversation);
      if (response) {await connection.sendMessage(remoteJid, { text: response })}
    }

    return
  });
};

module.exports = middleware;