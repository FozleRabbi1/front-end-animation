import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const LeftToRight = () => {
  const componentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.1 1"],
  });
  // const leftToRightXvalue = useTransform(scrollYProgress, [0, 1], [-1000, 0]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  return (
    <motion.div
      ref={componentRef}
      // style={{ x: leftToRightXvalue }}
      style={{ opacity: opacityValues }}
      className="h-[400px] rounded-2xl bg-green-500 col-span-6 lg:col-span-5 flex justify-center items-center text-2xl"
    >
      left to right
    </motion.div>
  );
};

export default LeftToRight;
