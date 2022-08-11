import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import weatherReducer from './weatherReducer';
import {firestoreReducer} from "redux-firestore";

const rootReducer = combineReducers({
  city: cityReducer,
  weather: weatherReducer,
  firestore: firestoreReducer
});

export default rootReducer;
