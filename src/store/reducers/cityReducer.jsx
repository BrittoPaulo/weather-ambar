const initState = {};

const cityReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_CITY':
     return action.payload
    case 'CLEAR_CITY':
      return action.payload
    default:
      return state;
  }
};

export default cityReducer;
