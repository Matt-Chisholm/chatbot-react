import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./components/LearningOptions";

const config = {
  botName: "Mattbot",
  initialMessages: [
    createChatBotMessage(`Hi, I'm here to help. What can I do for you?`, {
      widget: "learningOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
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
