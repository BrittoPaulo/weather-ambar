export const updateWeather =  (weather) => {        
  return async (dispatch, getState, {getFirebase, getFirestore }) =>  {
    const firestore = getFirestore();

      const date = await firestore.collection("weather").where("id", "==", weather.id?.toString())
      .get()
      if(date.docs?.length){
          date.docs.forEach(function(doc) {
              doc.ref.update(weather)
         })
      }else{
        const date = firestore.collection("weather").add(weather)
      }
    firestore.collection('weather_forecast_log').add({time:new Date(), ...weather })
    dispatch({ 
        type: 'UPDATE_WEATHER',
        weather
    });
  };
};