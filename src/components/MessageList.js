import React from 'react';
import { useSelector } from 'react-redux';
import MessageItem from './MessageItem';

const MessageList = () => {
  const messages = useSelector((state) => state.message) || [];

  return (
    <ul className="messageList">
      {messages.map((message) => (
        <li key={message.id}>
          <MessageItem
            id={message.id}
            subject={message.subject}
            from={message.from}
          />
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
