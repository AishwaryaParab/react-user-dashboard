import { googleLogout } from "@react-oauth/google"
import "./Content.css"
import Dashboard from "./dashboard/Dashboard"
import useAuthUser from "../../hooks/useAuthUser"

interface ContentProps {
  activeContent: string;
}

const Content = ({ activeContent }: ContentProps) => {
  const { setAuthUser } = useAuthUser();

  const getContent = () => {
    if (activeContent === "Dashboard") {
        return <Dashboard />
    } else if (activeContent === "Logout") {
        googleLogout();
        localStorage.removeItem('te-user');
        setAuthUser(null);
    }
  }

  return (
    <div className="content">
        {getContent()}
    </div>
  )
}

export default Content