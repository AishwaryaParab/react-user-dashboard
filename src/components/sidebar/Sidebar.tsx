import "./Sidebar.css"
import { SIDEBAR_ITEMS } from "../utils/data";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  activeContent: string;
  setActiveContent: (activeContent: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeContent, setActiveContent }) => {
  return (
    <div className="sidebar">
      {SIDEBAR_ITEMS.map((item) => (
        <div
          key={item.id}
          className={`sidebar-item ${activeContent === item.label ? "active" : ""}`}
          onClick={() => setActiveContent(item.label)}
        >
          <SidebarItem label={item.label} />
        </div>
      ))}
    </div>
  )
}

export default Sidebar