import React from "react";
import MessageInputField from "./MessageInputField";

const Chat = () => {
  
  // Array of messages with sender, receiver, message, and time
  const messages = [
    { sender: "receiver", text: "Hello, how are you?", time: "10:30pm" },
    { sender: "sender", text: "I'm good, thanks! How about you?", time: "10:32pm" },
    { sender: "receiver", text: "Doing well, thank you!", time: "10:35pm" },
    { sender: "sender", text: "Great to hear!", time: "10:36pm" },
    { sender: "receiver", text: "Hello, how are you?", time: "10:30pm" },
    { sender: "sender", text: "I'm good, thanks! How about you?", time: "10:32pm" },
    { sender: "receiver", text: "Doing well, thank you!", time: "10:35pm" },
    { sender: "sender", text: "Great to hear!", time: "10:36pm" },
    { sender: "receiver", text: "Hello, how are you?", time: "10:30pm" },
  ];

  return (
    <div className="bg-slate-200 w-full  pt-5 flex flex-col gap-5 h-dvh overflow-y-scroll ">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`w-1/2 px-3 flex mx-5 justify-between py-2 items-center ${
            message.sender === "sender"
              ? "self-end bg-gray-600 rounded-bl-xl rounded-tl-xl rounded-br-2xl"
              : "bg-gray-600 rounded-bl-2xl rounded-tr-xl rounded-br-xl"
          }`}
        >
          <h2>{message.text}</h2>
          <p className="self-end">{message.time}</p>
        </div>
      ))}

      <div className="   rounded-2xl bg-white  fixed bottom-0 w-[61%]">

      <MessageInputField/>
      </div>
    </div>
  );
};

export default Chat;
