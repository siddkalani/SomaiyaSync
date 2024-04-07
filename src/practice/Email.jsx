import axios from "axios";
import "./email.css";
import { Fragment, useEffect, useState } from "react";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:4200/api/users/verify/${param.id}`;
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);
  return (
    <Fragment>
      {validUrl ? (
        <div className="container">
          <h1>You are verified</h1>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      ) : (
        <h1>404 Page not found</h1>
      )}
    </Fragment>
  );
};
export default EmailVerify;
