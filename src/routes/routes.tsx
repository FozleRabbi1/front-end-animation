import App from "@/App";
import About from "@/Pages/About/About";
import Home from "@/Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "about", element: <About></About> },
    ],
  },
]);

export default router;
