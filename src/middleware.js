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
      const response = chatbot(conversation);
      await connection.sendMessage(remoteJid, { text: response });

      console.log(key);
      console.log('\n\n');
      console.log(message);
    }

    return
  });
};

module.exports = middleware;