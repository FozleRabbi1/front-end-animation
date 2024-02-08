import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <motion.header
      className=" h-16 fixed w-full z-50 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.8 } }}
    >
      <nav className="flex h-full justify-between items-center w-full max-w-[1230px] px-[20px] mx-auto">
        <span className="text-3xl">iRepair</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <Button>
            <NavLink to="login">Login</NavLink>
          </Button>
        </ul>
      </nav>
    </motion.header>
  );
};

export default NavBar;
