import { LOGIN_ROUTE, CHAT_ROUTE } from "./utils/consts";
import Chat from "../src/components/Chat";
import Login from "../src/components/Login";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat,
  },
];
