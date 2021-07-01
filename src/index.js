import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBX2s9c86_rWpUiVkMQ6HNAgTCnui2R-E8",
  authDomain: "chat-react-a9b16.firebaseapp.com",
  projectId: "chat-react-a9b16",
  storageBucket: "chat-react-a9b16.appspot.com",
  messagingSenderId: "260973734128",
  appId: "1:260973734128:web:c22833140d938f58413a35",
  measurementId: "G-FEX82FD3YC",
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
