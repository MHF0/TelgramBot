require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const Help = "help";
  if (msg.text.toString().toLowerCase().indexOf(Help) === 0) {
    bot.sendMessage(msg.chat.id, "What you want", {
      reply_markup: {
        keyboard: [["GitHub solution", "Nedd help (Join your room)"], [""]],
      },
    });
  }

  const Hi = "hi";
  if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.from.id, `Hello ${msg.from.first_name}`);
  }

  const Bye = "bye";
  if (msg.text.toString().toLowerCase().indexOf(Bye) === 0) {
    bot.sendMessage(msg.chat.id, `Goodbye ${msg.from.first_name}`);
  }

  const GitHub = "github solution";
  if (msg.text.toString().toLowerCase().indexOf(GitHub) === 0) {
    bot.sendMessage(
      msg.chat.id,
      `Here is the link: https://github.com/MERAKI-Academy-Staff/MA_C5-Main_Materials/tree/main/A-Solutions`
    );
  }

  const NeedHelp = "need help";
  if (msg.text.toString().toLowerCase().indexOf(NeedHelp) === 0) {
    bot.sendSticker({name: ""});
  }
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome", {
    reply_markup: {
      keyboard: [["Help", "Bye"]],
    },
  });
});

bot.onText(/\/sendpic/, (msg) => {
  bot.sendPhoto(
    msg.chat.id,
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    {
      caption: "Here we go ! \nThis is just a caption ",
    }
  );
});
