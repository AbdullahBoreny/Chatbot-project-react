/* eslint-disable react/prop-types */
import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/green mask.png';
import './ChatMessage.css';
import React from 'react';
import dayjs from 'dayjs';

export function ChatMessage({ message, sender }) {
  const time = dayjs().valueOf();
  return (
    <div className={
      sender === 'user'
        ? 'chat-message-user'
        : 'chat-message-robot'
    }>
      {sender === 'robot' && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        
        {message}
       <div className='time-text'>{dayjs(time).format('h:mma')}</div>

      </div>
      {sender === 'user' && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}