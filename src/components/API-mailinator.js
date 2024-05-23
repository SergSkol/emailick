import {
  MailinatorClient,
  GetInboxRequest,
//   GetMessageRequest,
} from 'mailinator-client';
import { getMessagesAction } from './redux/messages';

const domain = process.env.REACT_APP_API_DOMAIN;
const inbox = process.env.REACT_APP_API_INBOX;
const token = process.env.REACT_APP_API_TOKEN;

// const mockMessages = [{
//   id: 'mock123',
//   from: 'tester',
//   subject: inbox + domain + token[0],
// }];

const getMessagesFromAPI = () => async (dispatch) => {
  // WITH MAILINATOR MODULES

  const mailinatorClient = new MailinatorClient(token);
  const mailinatorInbox = await mailinatorClient.request(new GetInboxRequest(domain, inbox));
  if (mailinatorInbox.result) {
    const messages = mailinatorInbox.result.msgs;

    // console.log(messages);
    dispatch(getMessagesAction(messages));
  }

//   dispatch(getMessagesAction(mockMessages));
};

export default getMessagesFromAPI;
