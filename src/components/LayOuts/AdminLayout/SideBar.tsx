import { cn } from "@/lib/utils";
import {
  CalendarPlus2Icon,
  HardDriveDownload,
  LayoutDashboardIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";
const linkStyle =
  "bg-gray w-[90%] mt-2 pl-2 md:pl-5 py-2 rounded-xl hover:bg-dark-gray hover:text-white transition-all  flex items-center gap-2 ";

const SideBar = () => {
  return (
    <aside className="bg-slate-300 h-screen  sticky top-0 left-0 overflow-auto">
      <nav className="flex flex-col justify-center items-center">
        <NavLink className={linkStyle} to="/">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(linkStyle, { "bg-dark-gray text-white": isActive })
          }
          to="/admin/dashboard"
        >
          <LayoutDashboardIcon className="shrink-0" />
          <span className="truncate">DashBoard</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(linkStyle, { "bg-dark-gray text-white": isActive })
          }
          to="/admin/services"
        >
          <HardDriveDownload className="shrink-0" />
          <span className="truncate">service list</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(linkStyle, { "bg-dark-gray text-white": isActive })
          }
          to="/admin/addServcices"
        >
          <CalendarPlus2Icon className="shrink-0" />
          <span className="truncate">add Servcices</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default SideBar;
