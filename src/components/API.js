import { getMessagesAction } from './redux/messages';

// const domain = process.env.REACT_APP_API_DOMAIN;
// const inbox = process.env.REACT_APP_API_INBOX;
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

// const baseUrl = '/api/v2/domains/';
// const baseUrl = 'https://mailinator.com/api/v2/domains/';
// const url = `${baseUrl}${domain}/inboxes/${inbox}/messages`;
const url = 'https://api.spacexdata.com/v3/rockets'; // mock

const fillMessagesArray = (data) => {
  const messages = [];
  data.forEach((item) => {
    const message = {
      id: item.id,
      subject: item.rocket_name,
      from: item.country,
    };
    messages.push(message);
  });
  return messages;
};

const getMessagesFromAPI = () => async (dispatch) => {
  // const options = {
  //   mode: 'no-cors',
  //   credentials: 'include',
  //   method: 'GET',
  //   headers: headers,
  // };
  const options = {};
  const fetchPromise = fetch(url, options);

  fetchPromise
    .then((response) => response.json())
    .then((data) => {
      // const dataArray = JSON.stringify(data);
      const messages = fillMessagesArray(data);
      dispatch(getMessagesAction(messages));
    })
    .catch(() => {
      // error occurs
    });
};

export default getMessagesFromAPI;
