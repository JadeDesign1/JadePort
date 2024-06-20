import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./Header";

export default function Root() {
  return (
    <div className="grid grid-cols-10 gap-[2px] min-h-[100vh] bg-primary">
      <Header />
      <div className=" bg-dark xl:col-span-2 md:col-span-3 hidden md:block">
        <div>
          <Sidebar />
        </div>
      </div>
      <div className=" overflow-x-hidden col-span-10 bg-lightDark xl:col-span-8 md:col-span-7">
        <Outlet />
      </div>
    </div>
  );
}
