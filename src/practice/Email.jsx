// import axios from "axios";
// import "./email.css";
// import { Fragment, useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const EmailVerify = () => {
//   const [validUrl, setValidUrl] = useState(false);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const verifyEmailUrl = async () => {
//       try {
//         const url = `http://localhost:4200/api/users/verify?id=${id}`;
//         const { data } = await axios.get(url);
//         console.log(data);
//         setValidUrl(true);
//         navigate("/email");
//       } catch (error) {
//         console.log(error);
//         setValidUrl(false);
//       }
//     };
//     verifyEmailUrl();
//   }, [id, navigate]);
//   return (
//     <Fragment>
//       {validUrl ? (
//         <div className="container">
//           <h1>You are verified</h1>
//           <Link to="/login">
//             <button>Login</button>
//           </Link>
//         </div>
//       ) : (
//         <h1>404 Page not found</h1>
//       )}
//     </Fragment>
//   );
// };
// export default EmailVerify;

import { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./email.css";
const EmailVerify = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4200/api/users/verify?id=${id}`
        );
        if (response.status === 200 && response.data.is_verified === 1) {
          // Check if response status is 200
          setLoading(false);
          navigate("/email");
        } else {
          setLoading(false);
          console.log("User is not verified.");
        }
      } catch (error) {
        console.error("Error verifying email:", error);
        setLoading(false);
        // Handle error, maybe show an error message to the user
      }
    };

    verifyEmail();
  }, [id, navigate]);

  return (
    <Fragment>
      <div className="email-container">
        <div className="email-main">
          <h1>Email verified</h1>
          <Link to="/login">
            {" "}
            <button>Login</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default EmailVerify;
