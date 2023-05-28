const answers = require('./answers');

/**
 * Conversation sessions are moments in the conversation
 * where there's a subject in development, when the subject or issue
 * is solved, the session ends. i.e. User asking for the info of a product
 */
/* conversationSession = {
  subject: '',
  remoteJid: '',
  lastMessageTime: '',
  BOT_ON: true,
};
*/
const sessions = {};

const isValidOption = (flowOptions, message) => {
  let isValid = false;
  for (let i = 0; i < flowOptions.length; i++) {
    if (flowOptions[i].option === message) {
      isValid = true;
      break;
    };
  }
  return isValid;
};

const getNewSubject = (message, flowOptions) => {
  let subject;

  for (let i = 0; i < flowOptions.length; i++) {
    if (flowOptions[i].option === message) {
      subject = flowOptions[i].subject;
      break;
    }
  }
  return subject;
}

/**
 * Process the input of the user and returns the most
 * appropiate response to it
 * @param {String} id remoteJid, the interlocutor id
 * @param {String} message input text from the interlocutor
 * @returns {String} Response from the chatbot
 */
const chatbot = (id, message) => {
  let response = '';
  
  if (Object.hasOwn(sessions, id)) {
    if (sessions[id].BOT_ON) { 
      const currentSession = {...sessions[id]};
      const { flowOptions } = answers[currentSession.subject];
  
      if (isValidOption(flowOptions, message)) { // Validate interlocutor input
        const subject = getNewSubject(message, flowOptions);
        response = answers[subject].response;
  
        // Update subject
        sessions[id].subject = subject;
  
        // Check bot status
        sessions[id].BOT_ON = subject !== 'endBot';
      } else {
        response = 'No he podido entender tu respuesta' // TODO: Improve error handling
      }
    } else {
      return;
    }
  } else {
    // First contact
    sessions[id] = {
      subject: 'welcome',
      lastMessageTime: '',
      BOT_ON: true,
    };
    const { subject } = sessions[id]
    response = answers[subject].response;
  }
  return response;
}

module.exports = chatbot;