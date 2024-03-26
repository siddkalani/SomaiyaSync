import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import Quiz from './pages/Contest/games/quiz.jsx';

import { SidebarProvider } from './context/sidebarContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <App />
  </SidebarProvider>
)
