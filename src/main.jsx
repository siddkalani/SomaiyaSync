import ReactDOM from "react-dom/client";
import Login from "./practice/Login.jsx";
import Register from "./practice/Register.jsx";
import Quiz from "./pages/Contest/games/quiz.jsx";
import App from "./App.jsx";
import Account from "./pages/Accounts/Account.jsx";

import { SidebarProvider } from "./context/sidebarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <App/>
  </SidebarProvider>
);
