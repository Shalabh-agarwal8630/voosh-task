import { type ChatResponse } from "../types";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export async function sendMessage(sessionId: string, query: string): Promise<ChatResponse> {
  const res = await fetch(`${API_URL}/chat/${sessionId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) throw new Error("Failed to send message");
  return res.json();
}
