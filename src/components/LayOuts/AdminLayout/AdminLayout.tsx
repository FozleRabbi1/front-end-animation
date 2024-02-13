import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Container from "../Container";

const AdminLayout = () => {
  return (
    <Container>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <SideBar></SideBar>
        </div>
        <div className="col-span-10 bg-green-200 h-full]">
          <Outlet></Outlet>
        </div>
      </div>
    </Container>
  );
};

export default AdminLayout;
