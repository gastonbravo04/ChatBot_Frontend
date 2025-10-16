import { useState } from "react";

export default function InputBar({ onSend }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <form className="input-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribí un mensaje..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoFocus
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
