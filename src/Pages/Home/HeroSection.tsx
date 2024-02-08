import Container from "@/components/LayOuts/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.5, delayChildren: 0.8 },
  },
};
const introChildren = {
  hidden: { opacity: 0, y: -25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, type: "spring", bounce: 0.6 },
  },
};

const motherBoard = {
  initial: { y: 0, rotate: 0, scale: 5 },
  animate: {
    y: 50,
    rotate: -25,
    scale: 1,
    transition: {
      duration: 0.8,
      y: {
        repeat: Infinity,
        duration: 1.5,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};
const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      {/* <Container className="h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2 place-content-center "> */}
      <Container className="h-screen grid grid-cols-1 lg:grid-cols-2 place-content-center ">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            className="text-4xl lg:text-8xl font-bold text-nowrap"
            variants={introChildren}
          >
            <span className="text-gray">Don't worry,</span> <br />
            <span>we'll fix it.</span>
          </motion.h1>
          <motion.p
            className="text-gray mt-10 mb-5 max-w-[50ch]"
            variants={introChildren}
          >
            Lorem ipsum{" "}
            <span className="text-dark-gray font-semibold">dolor</span> sit amet
            consectetur adipisicing elit. Et eum{" "}
            <span className="text-dark-gray font-semibold">facere culpa</span>,
            modi sit consequuntur.
          </motion.p>
          <motion.div variants={introChildren}>
            <Button> Book a service</Button>
          </motion.div>
        </motion.div>

        <motion.div
          className=" flex justify-center items-center w-3/4 lg:w-full mx-auto "
          variants={motherBoard}
          initial="initial"
          animate="animate"
        >
          <img
            className=" rounded-lg md:h-[80%] h-[95%] object-contain border "
            src="https://www.wallpaperflare.com/static/182/561/273/microsoft-windows-windows-10-technology-hi-tech-wallpaper-preview.jpg"
            alt=""
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
