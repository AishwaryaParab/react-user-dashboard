import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./pages/home/HomePage";

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </GoogleOAuthProvider>
  )
}

export default App
