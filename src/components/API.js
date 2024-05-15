import axios from 'axios';
// import {
//   MailinatorClient,
//   GetInboxRequest,
//   GetMessageRequest,
// } from 'mailinator-client';
import { getMessagesAction } from './redux/messages';

const domain = process.env.REACT_APP_API_DOMAIN;
const inbox = process.env.REACT_APP_API_INBOX;
const token = process.env.REACT_APP_API_TOKEN;

// const mockMessages = [{
//   id: 'mock123',
//   from: 'tester',
//   subject: inbox + domain + token[0],
// }];

const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Origin', 'http://localhost:3000');
headers.append('Authorization', token);

const baseUrl = '/api/v2/domains/';
// const baseUrl = 'https://mailinator.com/api/v2/domains/';
const url = `${baseUrl}${domain}/inboxes/${inbox}`;

const fillMessagesArray = (data) => {
  const messages = [];
  const itemNames = Object.keys(data);
  itemNames.forEach((id) => {
    const itemContent = data[id];
    const { subject, from } = itemContent[0];
    const message = {
      id, subject, from,
    };
    messages.push(message);
  });
  return messages;
};

const sendRequest = async (dispatch) => {
  await axios.get(`${url}/messages`, {
    mode: 'cors',
    credentials: 'include',
    method: 'GET',
    headers,
  })
    .then((response) => {
      const data = response.data || null;
      const messages = fillMessagesArray(data);

      console.log(messages[0]);

      dispatch(getMessagesAction(messages));
    })
    .catch(() => {
      // error occurs
    });
};

const getMessagesFromAPI = () => async (dispatch) => {
  await sendRequest(dispatch);

  // WITH MAILINATOR MODULES

  // const mailinatorClient = new MailinatorClient(token);
  // const mailinatorInbox = await mailinatorClient.request(new GetInboxRequest(domain, inbox));
  // if (mailinatorInbox.result) {
  //   const messages = mailinatorInbox.result.msgs;

  //   // console.log(messages);
  //   dispatch(getMessagesAction(messages));
  // }

  // dispatch(getMessagesAction(mockMessages));
};

export default getMessagesFromAPI;
