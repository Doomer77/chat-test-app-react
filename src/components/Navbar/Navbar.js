import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { LOGIN_ROUTE } from "../../utils/consts";
import { Context } from "../../index";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Navbar() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          {user ? (
            <li className="nav-item">
              <button className="btn" onClick={() => auth.signOut()}>
                Выйти
              </button>
            </li>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <li className="nav-item">
                <button className="btn">Логин</button>
              </li>
            </NavLink>
          )}
        </ul>
      </nav>
    </header>
  );
}
