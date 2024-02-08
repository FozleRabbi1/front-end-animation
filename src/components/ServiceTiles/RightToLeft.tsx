import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const RightToLeft = () => {
  const componentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.1 1"],
    // offset: ["0 1", "0.1 1"],
  });
  // const rightToLeftXeffect = useTransform(scrollYProgress, [0, 1], [1000, 0]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <motion.div
      className="h-[400px] rounded-2xl bg-slate-500 col-span-6 lg:col-span-7 flex justify-center items-center text-2xl"
      ref={componentRef}
      style={{ opacity: opacityValues }}
      // style={{ x: rightToLeftXeffect }}
    >
      right to left
    </motion.div>
  );
};

export default RightToLeft;
