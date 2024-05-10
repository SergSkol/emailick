import React from 'react';
// import { useDispatch } from 'react-redux';

const MessageItem = (book) => {
  const {
    id, subject, from,
  } = book;

  // const dispatch = useDispatch();

  return (
    <div className="messageItem">
      <div className="messageContent">
        <div className="messageInfo">
          <h4 className="messageId">{id}</h4>
          <h2 className="messageSubject">{subject}</h2>
          <h6 className="messageFrom">{from}</h6>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
