import { useState } from "react";
import { sendMessage } from "../services/api";

export function useChat() {
  const [messages, setMessages] = useState([]);

  // Enviar mensaje al backend y actualizar el historial
  const handleSend = async (userMsg) => {
    if (!userMsg.trim()) return;

    const newMsg = { sender: "user", text: userMsg };
    setMessages((prev) => [...prev, newMsg]);

    try {
      const response = await sendMessage(userMsg);
      const botMsg = { sender: "bot", text: response };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const errorMsg = { sender: "bot", text: "⚠️ Error al conectar con el servidor" };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  return { messages, handleSend };
}
