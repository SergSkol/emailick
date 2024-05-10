import React from 'react';
import { useSelector } from 'react-redux';
import MessageItem from './MessageItem';

const MessageList = () => {
  const books = useSelector((state) => state.book) || [];

  return (
    <ul className="messageList">
      {books.map((book) => (
        <li key={book.id}>
          <MessageItem
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
