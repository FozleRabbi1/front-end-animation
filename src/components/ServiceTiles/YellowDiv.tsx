import useScrollHooks from "@/Hooks/ScrollHooks/useScrollHooks";
import { motion } from "framer-motion";

const YellowDiv = () => {
  // const componentRef = useRef<HTMLDivElement>(null);
  //   const { scrollYProgress } = useScroll({
  //     target: componentRef,
  //     offset: ["0 1", "1.1 1"],
  //   });
  //   const scaleValues = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  //   const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const { animStyle, componentRef } = useScrollHooks();
  return (
    <motion.div
      style={animStyle}
      ref={componentRef}
      className="h-[400px] rounded-2xl bg-yellow-500 col-span-12 flex justify-center items-center text-2xl"
    >
      yellow div
    </motion.div>
  );
};

export default YellowDiv;
