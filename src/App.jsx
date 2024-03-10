import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import ContentTop from './components/ContentTop/ContentTop';
import ContentMain from './components/ContentMain/ContentMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inbox from './pages/Inbox';
import Contest from './pages/Contest';
import Leaderboard from './pages/Leaderboard';
import Account from './pages/Account';
import Settings from './pages/Settings';
import Footer from './components/Footer/Footer';
import NewsFeed from './pages/NewsFeed';
function App() {
  return (

    <div className='whole-main'>
      <BrowserRouter>
        <div className='app'>
          <Sidebar />
          <div className='main-content'>
            <ContentTop />

            <Routes>
              <Route path='/home' element={<ContentMain />} >

              </Route>
              <Route path='/contest' element={<Contest/>} >

              </Route>
              <Route path='/inbox' element={<Inbox/>} >

              </Route>
              <Route path='/account' element={<Account/>} >

              </Route>
              <Route path='/leaderboard' element={<Leaderboard/>} >

              </Route>
              <Route path='/settings' element={<Settings/>} >

              </Route>
              <Route path='/NewsFeed' element={<NewsFeed/>} >

              </Route>

            </Routes>
           {/* <div className="footer">
            <Footer />
            </div> */}
          </div>
        </div>
        </BrowserRouter>

    </div>
  )
}

export default App
