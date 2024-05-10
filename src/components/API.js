// import axios from 'axios';
import {
  MailinatorClient,
  GetInboxRequest,
  // GetMessageRequest,
} from 'mailinator-client';
import { getMessagesAction } from '../redux/messages/messages';

// const baseUrl = 'https://mailinator.com/api/v2/domains/';
const domain = 'team875296.testinator.com';
const inbox = 'test3';
const token = process.env.REACT_APP_API_TOKEN;

console.log(token);

// const headers = new Headers();
// headers.append('Content-Type', 'application/json');
// headers.append('Accept', 'application/json');
// headers.append('Origin', 'http://localhost:3000');
// headers.append('Authorization', token);

// const url = `${baseUrl}${domain}/inboxes/${inbox}`;

// const fillMessagesArray = (data) => {
//   const messages = [];
//   const itemNames = Object.keys(data);
//   itemNames.forEach((id) => {
//     const itemContent = data[id];
//     const { subject, from } = itemContent[0];
//     const message = {
//       id, subject, from,
//     };
//     messages.push(message);
//   });
//   return messages;
// };

const getMessagesFromAPI = () => async (dispatch) => {
  // const sendRequest = async () => {
  //   await axios.get(`${url}/messages`, {
  //     mode: 'no-cors',
  //     credentials: 'include',
  //     method: 'GET',
  //     headers,
  //   })
  //     .then((response) => {
  //       const data = response.data || null;

  //       console.log(data);
  //       const messages = fillMessagesArray(data);
  //       dispatch(getMessagesAction(messages));
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };
  // await sendRequest();

  const mailinatorClient = new MailinatorClient(token);
  const mailinatorInbox = await mailinatorClient.request(new GetInboxRequest(domain, inbox));
  if (mailinatorInbox.result) {
    const messages = mailinatorInbox.result.msgs;

    console.log(messages);
    dispatch(getMessagesAction(messages));
  }
};

export default getMessagesFromAPI;
