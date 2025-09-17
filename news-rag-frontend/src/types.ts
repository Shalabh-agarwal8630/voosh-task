export interface Message {
  role: "user" | "bot";
  content: string;
  createdAt?: string;
}

export interface SessionResponse {
  sessionId: string;
  createdAt?: string;
}

export interface ChatResponse {
  answer: string;
  messages: Message[];
}
