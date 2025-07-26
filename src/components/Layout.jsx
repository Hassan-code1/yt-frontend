import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "../styles/Layout.css";
const Layout = () => {
    return (
        <div className="layout-container">
            <Navbar />
            <div className="flex">
                <Sidebar/>
                <main className="flex-grow p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout