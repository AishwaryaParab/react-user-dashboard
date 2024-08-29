import "./Sidebar.css";

interface SidebarItem {
  id: number;
  label: string;
}

const SidebarItem = ({ label }: SidebarItem) => {
  return (
    <div>
        <p>{label}</p>
    </div>
  )
}

export default SidebarItem