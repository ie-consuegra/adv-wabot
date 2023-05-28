const connectToWhatsApp = require('./connection');
const middleware = require('./middleware');

async function start() {
  const connection = await connectToWhatsApp();
  await middleware(connection);
}

start();