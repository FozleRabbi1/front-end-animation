import useScrollHooks from "@/Hooks/ScrollHooks/useScrollHooks";
import { motion } from "framer-motion";
const BatteryReplacemnet = () => {
  //   const componentRef = useRef<HTMLDivElement>(null);
  //   const { scrollYProgress } = useScroll({
  //     target: componentRef,
  //     offset: ["0 1", "1.2 1"],
  //   });
  //   const opacityValues = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  const { componentRef, animStyle } = useScrollHooks();
  return (
    <motion.div
      style={animStyle}
      ref={componentRef}
      className="h-[400px] rounded-2xl bg-red-500 col-span-12 p-2 flex justify-center items-center "
    >
      <h1 className="text-2xl"> smooth transition</h1>
    </motion.div>
  );
};

export default BatteryReplacemnet;
