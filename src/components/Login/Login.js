import React, { useContext } from "react";
import "./Login.css";
import { Context } from "../../index";
import firebase from "firebase";

export default function Login() {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <div className="login">
      <button className="btn-google" onClick={login}>
        Войти с помощью Google
      </button>
    </div>
  );
}
