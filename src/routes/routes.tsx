import App from "@/App";
import About from "@/Pages/About/About";
import AddService from "@/Pages/Admin/AddService";
import Dashboard from "@/Pages/Admin/Dashboard";
import ServiceList from "@/Pages/Admin/ServiceList";
import Home from "@/Pages/Home/Home";
import AdminLayout from "@/components/LayOuts/AdminLayout/AdminLayout";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "about", element: <About></About> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      { index: true, element: <Navigate to="/admin/dashboard"></Navigate> },
      { path: "dashboard", element: <Dashboard></Dashboard> },
      { path: "services", element: <ServiceList></ServiceList> },
      { path: "addServcices", element: <AddService></AddService> },
    ],
  },
]);

export default router;
