import { type SessionResponse } from "../types";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export async function startSession(): Promise<SessionResponse> {
  const res = await fetch(`${API_URL}/session/start`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error("Failed to start session");
  return res.json();
}

export async function getSessionHistory(sessionId: string) {
  const res = await fetch(`${API_URL}/session/${sessionId}`);
  if (!res.ok) throw new Error("Failed to fetch history");
  return res.json();
}

export async function clearSession(sessionId: string) {
  const res = await fetch(`${API_URL}/session/${sessionId}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to clear session");
  return res.json();
}
