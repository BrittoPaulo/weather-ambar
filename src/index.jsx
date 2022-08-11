import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { configureStore, compose } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";
import App from "./App";
import { reduxFirestore, getFirestore, createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import firebaseConfig from './config/firebaseConfig'
const rrfConfig = {
}
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>    
    getDefaultMiddleware({
    thunk: {
      extraArgument: {
        getFirebase,
        getFirestore
      },
    },
    serializableCheck: false,   
  })
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebaseConfig}
      config={rrfConfig}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}
      initializeAuth={false}
    >
      <App />
    </ReactReduxFirebaseProvider>   
  </Provider>
);
