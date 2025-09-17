import React from "react";
import { type Message } from "../types";
import "../styles/chat.scss";

interface Props {
  message: Message;
}

export default function MessageBubble({ message }: Props) {
  return (
    <div className={`message-bubble ${message.role}`}>
      <div className="message-content">{message.content}</div>
    </div>
  );
}
