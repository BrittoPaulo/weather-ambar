export const updateCity =  (city) => {        
  return  (dispatch, getState) =>  { 
    dispatch({ 
        type: 'UPDATE_CITY',
        payload: city
    });
  };
};

export const clearCity = () =>  {
  return  (dispatch, getState) =>  { 
    dispatch({ 
        type: 'CLEAR_CITY',
        payload: null
    });
  };
}