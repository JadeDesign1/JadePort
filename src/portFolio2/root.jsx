import "../App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./Header";
import DarkMode from "./darkMode";

export default function Root() {
  return (
    <div className="rootContainer">
      <Header />
      <div className="xl:col-span-2 pt-8 md:col-span-3 hidden md:block">
        <div>
          <Sidebar />
        </div>
      </div>
      <div className="outletContainer">
        <DarkMode />
        <Outlet />
      </div>
    </div>
  );
}
