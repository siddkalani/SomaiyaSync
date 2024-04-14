import ReactDOM from "react-dom/client";
import EditBasicDetails from "./practice/EditProfile/basicDetails/EditProfile.jsx";
import { SidebarProvider } from "./context/sidebarContext.jsx";
import App from "./App.jsx";
import ContentMain from "./components/ContentMain/ContentMain.jsx";
import Landing from "./pages/Landing-page/Landing.jsx";
import Quiz from "./pages/Quiz/Quiz.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <App/>
    {/* <Landing/> */}
    {/* <Quiz/> */}
  </SidebarProvider>
);
