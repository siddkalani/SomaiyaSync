import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
// Import components and store
import Index from './routes/Index';
import ProductManagementDashboard from './App';
import Dashboard from './pages/Dashboard';
import OrderList from './pages/OrderList';
import History from './pages/History';
import Bills from './pages/Bills';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import EmailVerify from './pages/auth/Email';

const router = createBrowserRouter([
{
  path:'/login',
  element: <Login/>
},
{
  path:'/register',
  element: <Register/>
},
{
  path:'/email',
  element: <EmailVerify/>
},
  {
    path: '/',
    element: <Index />,
    children: [
      {
        path:'/product',
        element: <ProductManagementDashboard />
      },
      {
        index:true,
        path:'/',
        element: <Dashboard />
      },
      {
        path:'/order-list',
        element: <OrderList />
      },
      {
        path:'/history',
        element: <History />
      },
      {
        path:'/bills',
        element: <Bills />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)