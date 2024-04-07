import "./ContentMain.css";
import Cards from "../Cards/Cards";
import Transactions from "../Transactions/Transactions";
import Report from "../Report/Report";
import Budget from "../Budget/Budget";
import Subscriptions from "../Subscriptions/Subscriptions";
import Savings from "../Savings/Savings";
import Loans from "../Loans/Loans";
import Financial from "../Financial/Financial";
import { useLocation } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ContentTop from "../ContentTop/ContentTop";
import Sidebar from "../../layout/Sidebar/Sidebar";

const ContentMain = () => {
  // const locate = useLocation();
  // const topName = locate.state.topName

  // if(topName == null){
  //   topName = 
  // }
  return (
    <div className='whole-main'>
    <div className='app'>
    <Sidebar />
    <div className='main-content'>
    <div className="main-content-holder">
      <ContentTop />
        <div className="content-grid-one">
            <Cards 
            name="Welcome to SomaiyaSync"/>
            <Transactions />
            <Report />
        </div>
        <div className="content-grid-two">
            <Budget />
            <div className="grid-two-item">
              <div className="subgrid-two">
                <Subscriptions />
                <Savings />
              </div>
            </div>

            <div className="grid-two-item">
              <div className="subgrid-two">
                <Loans />
                <Financial />
              </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
  )
}

export default ContentMain
