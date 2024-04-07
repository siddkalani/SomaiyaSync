import "./App.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";
import ContentTop from "./components/ContentTop/ContentTop";
import ContentMain from "./components/ContentMain/ContentMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inbox from "./pages/Inbox/Inbox";
import Contest from "./pages/Contest/Contest";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Account from "./pages/Accounts/Account";
import Settings from "./pages/Settings/Settings";
import Footer from "./components/Footer/Footer";
import NewsFeed from "./pages/NewsFeed/NewsFeed";
import EditProfile from "./pages/BasicDetails/EditProfile";
import Login from "./practice/Login";
import Register from "./practice/Register";
import { useLocation } from "react-router-dom";
import EmailVerify from "./practice/Email";

function App() {
  return (
    <div className="whole-main">
      <BrowserRouter>
        <div className="app">
          <Sidebar />
          <div className="main-content">
            <Routes>
              {/* <Route index element={<ContentMain />}>

              </Route>  */}
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/email" element={<EmailVerify />}></Route>

              <Route path="/home" element={<ContentMain />}></Route>
              <Route path="/contest" element={<Contest />}></Route>
              <Route path="/inbox" element={<Inbox />}></Route>
              <Route path="/account" element={<Account />}></Route>
              <Route path="/leaderboard" element={<Leaderboard />}></Route>
              <Route path="/settings" element={<Settings />}></Route>
              <Route path="/NewsFeed" element={<NewsFeed />}></Route>
              {/* <Route path='/EditProfile' element={<EditProfile/>} >

              </Route> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
