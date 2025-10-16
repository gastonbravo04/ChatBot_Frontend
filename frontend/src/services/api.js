export async function sendMessage(message) {
  try {
    const res = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    return data.response;
  } catch (error) {
    console.error("Error al conectar con el servidor:", error);
    return "Error de conexión con el servidor.";
  }
}
