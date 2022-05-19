const initialState = {
  value: "",
  status: 'idle',
};

function letterReducer (state = initialState, action) {
  switch (action.type) {
    case 'letter/newPress': 
      return {state, status: 'pressed'};
    default:
      return state;
  }
}