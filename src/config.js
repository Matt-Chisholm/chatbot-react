import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Mattbot",
  initialMessages: [
    createChatBotMessage(`Hi, I'm here to help. What can I do for you?`),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};

export default config;
