import { CredentialResponse, GoogleLogin } from "@react-oauth/google"
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Lottie from 'react-lottie';
import animationData from '../../assets/success.json';
import { useNavigate } from "react-router-dom";
import "./Login.css";
import useAuthUser from "../../hooks/useAuthUser";
import { AuthUser } from "../../context/AuthUserContext";

const Login = () => {
  const { authUser, setAuthUser } = useAuthUser();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) {
      navigate("/");
    }
  }, [authUser]);

  const handleLogin = (credentialResponse: CredentialResponse) => {
    setIsLoading(true);

    try {
      if (credentialResponse.credential) {
        const credentialResponseDecoded = jwtDecode<AuthUser>(credentialResponse.credential);
        const { name, email, picture } = credentialResponseDecoded;
  
        setAuthUser({ name, email, picture});
        localStorage.setItem('te-user', JSON.stringify({ name, email, picture}));
  
        setIsSuccess(true);
      }
    } catch(err) {
      console.error("Login failed:", err);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      {isLoading && <div className="spinner">Loading...</div>}
      {isSuccess && <div className="checkmark">
        <Lottie 
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>}

      {!isLoading && !isSuccess &&
        <div className="login-page">
          <h1>Welcome to TE Dashboard 👋</h1>
          <p>Login to access your dashboard and track your energy needs!</p>
          <GoogleLogin
            onSuccess={handleLogin}
            onError={() => {
              console.log("Login failed");
            }}
          />
        </div>
      }
    </div>
  )
}

export default Login