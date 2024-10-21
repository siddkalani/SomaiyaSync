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
import { useLocation } from "react-router-dom";
import Login from "./practice/login/Login";
import Register from "./practice/register/Register";
import EmailVerify from "./practice/email/Email";
import EditBasicDetails from "./practice/EditProfile/basicDetails/EditProfile";
import EditContactInformation from "./practice/EditProfile/contactinfo/ContactInfo";
import EditSkills from "./practice/EditProfile/Skills/Skills";
import EditProject from "./practice/EditProfile/Project/Project";
import EditEducation from "./practice/EditProfile/Education/Education";
import Landing from "./pages/Landing-page/Landing";
import UsersAccount from "./pages/Accounts/UsersAccount";
import QuizApp from "./pages/Quiz/quiz-landing/QuizApp";
import NewQuizApp from "./pages/Quiz/NewQuiz/NewQuizApp";
import Month from "./pages/Leaderboard/components/Month";
import Year from "./pages/Leaderboard/components/Year";
import Dashboard from "./pages/Admin/Dashboard";
// import Today from "./pages/Leaderboard/components/Today";
// import Join from "./practice/chat_chord/Join";
// import Chat from "./practice/chat_chord/Chat";
// import Join from "./practice/chat_chord/Join";
// import Chat from "./practice/chat_chord/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/email" element={<EmailVerify />}></Route>
        <Route path="/home" element={<ContentMain />}></Route>
        <Route path="/contest" element={<Contest />}></Route>
        <Route path="/inbox" element={<Inbox />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/account/:username" element={<UsersAccount />}></Route>
        <Route path="/leaderboard" element={<Leaderboard />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/NewsFeed" element={<NewsFeed />}></Route>
        <Route path="/Editprofile" element={<EditBasicDetails />}></Route>
        <Route path="/contactInfo" element={<EditContactInformation />}></Route>
        <Route path="/skills" element={<EditSkills />}></Route>
        <Route path="/project" element={<EditProject />}></Route>
        <Route path="/education" element={<EditEducation />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/quiz-section" element={<QuizApp/>}></Route>
        <Route path="/game" element={<NewQuizApp/>}></Route>
        <Route path="/Leaderboard/month" element={<Month/>}></Route>
        <Route path="/Leaderboard/year" element={<Year/>}></Route>

        <Route path="/Admin/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/Leaderboard/year" element={<Year/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
