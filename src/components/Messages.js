import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MessageList from './MessageList';
import getMessagesFromAPI from './API';

const Messages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessagesFromAPI());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="inner">
        <MessageList />
      </div>
    </div>
  );
};

export default Messages;
