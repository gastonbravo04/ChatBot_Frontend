export default function MessageBubble({ sender, text }) {
  const bubbleClass =
    sender === "user"
      ? "message-bubble user"
      : "message-bubble bot";
  return (
    <div className={bubbleClass}>
      {text}
    </div>
  );
}
