import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrollHooks = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.1 1"],
  });
  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const animStyle = { scale: scaleValues, opacity: opacityValues };
  return { componentRef, animStyle };
};

export default useScrollHooks;
