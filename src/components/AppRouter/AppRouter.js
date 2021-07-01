import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Context } from "../../index";
import { privateRoutes, publicRoutes } from "../../routes";
import { LOGIN_ROUTE, CHAT_ROUTE } from "../../utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";

export default function AppRouter() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={CHAT_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
}