import axios from "axios";

const env = process.env
const api_key = env.REACT_APP_API_KEY;

const api = axios.create({
    baseURL: env.REACT_APP_API_BASE_URL,
    timeout: 10000,
});



export const getWeatherForecast = (id) => {

  return api({
      method: 'GET',
      url: `/weather`,
      params:{
        appid: api_key,
        lang:'pt_br',
        units: 'metric',
        id
      }
  })

}



