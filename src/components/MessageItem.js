import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getMessagesFromAPI from './API';

const MessageItem = (message) => {
  const {
    id, subject, from,
  } = message;

  const dispatch = useDispatch();

  // change to getMessageById
  useEffect(() => {
    dispatch(getMessagesFromAPI());
  }, [dispatch]);

  return (
    <div className="messageItem">
      <div className="messageContent">
        <div className="messageInfo">
          <h4 className="messageId">
            ID:
            {id}
          </h4>
          <h2 className="messageSubject">{subject}</h2>
          <h6 className="messageFrom">
            FROM:
            {from}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
