import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../AppRouter";
import Navbar from "../Navbar";
import { Context } from "../../index";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../Loader.js";
import "./App.css";

export default function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}
