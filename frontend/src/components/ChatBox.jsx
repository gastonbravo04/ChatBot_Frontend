import { useChat } from "../hooks/useChat";
import MessageBubble from "./MessageBubble";
import InputBar from "./InputBar";
import { useEffect, useRef } from "react";
import botAvatar from "../assets/image.png";

export default function ChatBox() {
  const { messages, handleSend } = useChat();
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-4 flex flex-col">
      {/* Cabecera del Chatbot */}
      <div className="flex flex-col items-center mb-4">
        <span className="chatbot-title">ChatBot</span>
        <img
          src={botAvatar}
          alt="Bot Avatar"
          className="w-20 h-20 rounded-full shadow mb-2 bot-avatar-animated"
          style={{ objectFit: "cover", background: "#f1f5f9" }}
        />
      </div>
      {/* Mensajes */}
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} sender={msg.sender} text={msg.text} />
        ))}
        <div ref={endRef} />
      </div>
      {/* Barra de entrada */}
      <InputBar onSend={handleSend} />
    </div>
  );
}


