import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';
import React from 'react';


// eslint-disable-next-line react/prop-types
export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }
  function clearMessage() {
            setChatMessages([])
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

    setInputText('');
  }

  return (
    <div className="chat-input-container">
      <input
      onKeyDown={(e) => {
        
        if(e.key === "Enter") {
          e.preventDefault();
          sendMessage();
        }
      }}
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button
      
        onClick={sendMessage}
        className="send-button"
      >Send</button>
      <button
      
        onClick={clearMessage}
        className="clear-button"
      >Clear</button>
    </div>
  );
}