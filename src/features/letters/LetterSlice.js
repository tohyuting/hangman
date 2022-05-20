const initialState = {
  theme: "",
  word: "",
};

function letterReducer (state = initialState, action) {
  switch (action.type) {
    case 'theme/newTheme': 
      console.log(action.text);
      return { ...state, theme: action.text};
    case 'word/newWord':
      return { ...state, word: action.text};
    default:
      return state;
  }
}

export default letterReducer;
