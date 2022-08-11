const initState = {};

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_WEATHER':
     return action.weather
    default:
      return state;
  }
 
};

export default weatherReducer;
