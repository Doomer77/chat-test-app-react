import React, { useContext, useState } from "react";
import "./Chat.css";
import { Context } from "../../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import Loader from "../Loader.js";
import firebase from "firebase";

export default function Chat() {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );
  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="chat">
      <div className="chat-field">
        {messages.map((message) => (
          <div
            className="message-item"
            style={{
              border:
                user.uid === message.uid
                  ? "0.1rem solid rgba(241, 63, 230, 1)"
                  : "0.1rem solid rgba(80, 141, 236, 1)",
              marginLeft: user.uid === message.uid ? "auto" : "10px",
            }}
          >
            <div className="info-user">
              <img
                src={message.photoURL}
                alt={message.photoURL}
                className="user-avatar-icon"
              />
              <div className="user-name">{message.displayName}</div>
            </div>
            <p className="messsage-text">{message.text}</p>
          </div>
        ))}
      </div>
      <div className="chat-message-enter">
        <input
          type="text"
          placeholder="Enter message"
          className="input-message"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={sendMessage} className="btn-submit-message">
          Отправить
        </button>
      </div>
    </div>
  );
}
