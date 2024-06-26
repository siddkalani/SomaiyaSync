// import { CheckCircle2 } from "lucide-react";
// import { pricingOptions } from "../../constants/LandingData";

// const Pricing = () => {
//   return (
//     <div className="mt-20">
//       <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
//         Pricing
//       </h2>
//       <div className="flex flex-wrap">
//         {pricingOptions.map((option, index) => (
//           <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
//             <div className="p-10 border border-neutral-700 rounded-xl">
//               <p className="text-4xl mb-8">
//                 {option.title}
//                 {option.title === "Pro" && (
//                   <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
//                     (Most Popular)
//                   </span>
//                 )}
//               </p>
//               <p className="mb-8">
//                 <span className="text-5xl mt-6 mr-2">{option.price}</span>
//                 <span className="text-neutral-400 tracking-tight">/Month</span>
//               </p>
//               <ul>
//                 {option.features.map((feature, index) => (
//                   <li key={index} className="mt-8 flex items-center">
//                     <CheckCircle2 />
//                     <span className="ml-2">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//               <a
//                 href="#"
//                 className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
//               >
//                 Subscribe
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pricing;


import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../../constants/LandingData";
import "./Pricing.css"; // Import your CSS file

const Pricing = () => {
  return (
    <div id="P" className="pricing-container">
      <h2 className="pricing-title">Pricing</h2>
      <div className="pricing-options">
        {pricingOptions.map((option, index) => (
          <div key={index} className="pricing-option">
            <div className="pricing-card">
              <p className="pricing-card-title">
                {option.title}
                {option.title === "Pro" && (
                  <span className="pricing-popular">(Most Popular)</span>
                )}
              </p>
              <p className="pricing-card-price">
                <span className="pricing-price">{option.price}</span>
                <span className="pricing-currency">/Month</span>
              </p>
              <ul className="pricing-features">
                {option.features.map((feature, index) => (
                  <li key={index} className="pricing-feature">
                    <CheckCircle2 className="pricing-check-icon" />
                    <span className="pricing-feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="pricing-subscribe-btn">
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
