import "./Topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge } from "@mui/material";
import Profile from "../profile/Profile";
import SettingsIcon from '@mui/icons-material/Settings';
import ThemeToggle from "./ThemeToggle";
const Topbar = () => {
  return (
    <div className="topbar">
      <h2>TE DASHBOARD</h2>

      <div className="icons">
        <ThemeToggle />
        <SearchIcon />
        <Badge badgeContent={4} color="primary">
          <NotificationsIcon className="alerts" />
        </Badge>

        <Profile />
        <SettingsIcon />
      </div>
    </div>
  )
}

export default Topbar