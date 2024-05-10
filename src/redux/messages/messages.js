const initialState = [];

// Actions
const GET = 'messages/GET';

// Reducer
export default function messageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET:
      return action.messages;
    default: return state;
  }
}

// Action Creators
export function getMessagesAction(messages) {
  return { type: GET, messages };
}
