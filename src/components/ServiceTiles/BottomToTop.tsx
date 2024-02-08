import useScrollHooks from "@/Hooks/ScrollHooks/useScrollHooks";
import { motion } from "framer-motion";

const BottomToTop = () => {
  const { componentRef, animStyle } = useScrollHooks();
  return (
    <motion.div
      className="h-[400px] rounded-2xl bg-amber-500 col-span-12 md:col-span-6 lg:col-span-4 flex justify-center items-center text-2xl"
      ref={componentRef}
      style={animStyle}
    >
      bottom yellow dev
    </motion.div>
  );
};

export default BottomToTop;
