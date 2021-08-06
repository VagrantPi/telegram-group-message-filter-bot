const TelegramBot = require('node-telegram-bot-api');
// const express = require('express');
// const app = express();

const token = process.env.token;
const fromChatId = process.env.fromChatId;
const toChatId = process.env.toChatId;
const userId = process.env.userId;
const log = process.env.telegram_log

if (!token) {
  throw new Error('token not set')
} else if (!fromChatId) {
  throw new Error('fromChatId not set')
} else if (!toChatId) {
  throw new Error('toChatId not set')
} else if (!userId) {
  throw new Error('userId not set')
}

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  if (log === '1') console.log('msg', msg);
  if (msg && (`${msg.chat.id}` === `${fromChatId}`) && (`${msg.from.id}` === `${userId}`)) {
    if (msg.photo) {
      bot.sendPhoto(toChatId, msg.photo[msg.photo.length - 1].file_id)
    } else if (msg.text) {
      bot.sendMessage(toChatId, msg.text);
    } else if (msg.document) {
      bot.sendAudio(toChatId, msg.document.file_id)
    } 
  }
});

// app.set('port', (process.env.PORT || 5000));

// //For avoid Heroku $PORT error
// app.get('/', function(request, response) {
//     var result = 'App is running'
//     response.send(result);
// }).listen(app.get('port'), function() {
//     console.log('App is running, server is listening on port ', app.get('port'));
// });

// app.set('port', (process.env.PORT || 5000));
