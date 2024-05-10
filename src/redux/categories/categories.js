const initialState = [];

// Actions
const STATUS = 'categories/STATUS';

const fillCategoriesArray = (messages) => {
  const categories = messages.reduce((acc, message) => {
    const categoryIndex = acc.findIndex((item) => item.category === message.category);
    if (categoryIndex !== -1) {
      acc[categoryIndex].count += 1;
    } else {
      acc.push({ category: message.category, count: 1 });
    }
    return acc;
  }, []);
  return categories;
};

// Reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return fillCategoriesArray(action.messages);
    default:
      return state;
  }
};

// Action Creator
export const checkStatusAction = (messages) => (
  { type: STATUS, messages }
);

export default categoriesReducer;
