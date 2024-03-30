import ReactDOM from 'react-dom/client'
import Login from './practice/Login.jsx';
import Register from './practice/Register.jsx';
import Quiz from './pages/Contest/games/quiz.jsx';

import { SidebarProvider } from './context/sidebarContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <Register />
  </SidebarProvider>
)
