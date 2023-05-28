const answers = require('./answers');

const chatbot = (message) => {
  const evaluateMsg = {
    '1': answers.services,
    '2': answers.botInfo,
    '3': answers.endBot,
    inicio: answers.initMenu,
  };

  return evaluateMsg[message] || `${answers.welcome}\n${answers.initMenu}`;
}

module.exports = chatbot;