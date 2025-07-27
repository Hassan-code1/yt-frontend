import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import { Home, User, ListVideo, Video, Settings} from "lucide-react"; // or any icon lib
import { MdOutlineSubscriptions } from "react-icons/md";
const Sidebar = ({ sidebarOpen }) => {
  return (
    <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <div className="sidebar-section">
        <Link to="/">
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link to="/subscriptions">
          <MdOutlineSubscriptions size={20} />
          <span>Subscriptions</span>
        </Link>
        <Link to="/profile">
          <User size={20} />
          <span>You</span>
        </Link>
      </div>
      <div className="sidebar-section">
        <Link to="/playlists">
          <ListVideo size={20} />
          <span>Playlists</span>
        </Link>
        <Link to="/your-videos">
          <Video size={20} />
          <span>Your Videos</span>
        </Link>
        <Link to="/settings">
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;