import { useEffect, useState } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'
import { chatbot, Chatbot } from 'supersimpledev';
import React from 'react';

function App() {
  
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem("messages")) ||
  [{

    message: 'hello chatbot',
    sender: 'user',
    id: 'id1'
  }, {
    message: 'Hello! How can I help you?',
    sender: 'robot',
    id: 'id2'
  }, {
    message: 'can you get me todays date?',
    sender: 'user',
    id: 'id3'
  }, {
    message: 'Today is September 27',
    sender: 'robot',
    id: 'id4'
  }]);
 
  useEffect(() =>{
    Chatbot.addResponses(
      {
        '%id%': function () {
          return `Sure here's a unique id: ${crypto.randomUUID()}`
        }
      }
    )
  },[])
  useEffect(() => {
    localStorage.setItem('messages',JSON.stringify(chatMessages))
  },[chatMessages])

  return (
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App