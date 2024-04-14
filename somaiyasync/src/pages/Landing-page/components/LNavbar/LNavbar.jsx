// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import logo from "./logo.png";
// import { navItems } from "../../constants/LandingData";

// const LNavbar = () => {
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

//   const toggleNavbar = () => {
//     setMobileDrawerOpen(!mobileDrawerOpen);
//   };

//   return (
//     <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
//       <div className="container px-4 mx-auto relative lg:text-sm">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center flex-shrink-0">
//             <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
//             <span className="text-xl tracking-tight">VirtualR</span>
//           </div>
//           <ul className="hidden lg:flex ml-14 space-x-12">
//             {navItems.map((item, index) => (
//               <li key={index}>
//                 <a href={item.href}>{item.label}</a>
//               </li>
//             ))}
//           </ul>
//           <div className="hidden lg:flex justify-center space-x-12 items-center">
//             <a href="#" className="py-2 px-3 border rounded-md">
//               Sign In
//             </a>
//             <a
//               href="#"
//               className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
//             >
//               Create an account
//             </a>
//           </div>
//           <div className="lg:hidden md:flex flex-col justify-end">
//             <button onClick={toggleNavbar}>
//               {mobileDrawerOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//         {mobileDrawerOpen && (
//           <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
//             <ul>
//               {navItems.map((item, index) => (
//                 <li key={index} className="py-4">
//                   <a href={item.href}>{item.label}</a>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex space-x-6">
//               <a href="#" className="py-2 px-3 border rounded-md">
//                 Sign In
//               </a>
//               <a
//                 href="#"
//                 className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
//               >
//                 Create an account
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default LNavbar;

import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "./logo.png";
import { navItems } from "../../constants/LandingData";
import somaiya from '../../../../assets/images/somaiya.jpg'
import "./LNavbar.css"; // Import your CSS file
import { Link } from "react-router-dom";

const LNavbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="Lnavbar">
      <div className="Lcontainer">
        <div className="navbar-main">
          <div className="navbar-head">
            <img className="Llogo" src={somaiya} alt="Logo" />
            <span className="brand">SomaiyaSync</span>
          </div>
          <div className="link-div">
          <ul className="Lnav-links">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          </div>
          <div className="Lbuttons">
            <Link to="/login">
            <button className="Lbutton">
              Sign In
            </button>
            </Link>
            <Link to="/register">
            <button className="Lbutton create-account">
              Create an account
            </button>
            </Link>
          </div>
          <div className="mobile-menu">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="mobile-drawer">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="mobile-link">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="Lbuttons">
              <a href="#" className="Lbutton">
                Sign In
              </a>
              <a href="#" className="Lbutton create-account">
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LNavbar;


