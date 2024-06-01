import { motion } from "framer-motion";

const imageVariants = {
  hidden: { motionRotation: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 4.5,
      repeat: Infinity,
      restSpeed: 0.01,
      repeatType: "mirror",
    },
  },
};

const HeroImage = ({ src, className, altname, animateImage }) => {
  return (
    <motion.div
      variants={animateImage && imageVariants}
      initial="hidden"
      animate="animate"
      viewport={{ margin: "-20px" }}
      className="glow pointer-events-none select-none mx-auto min-w-[200px] max-sm:pr-4 md:w-auto"
    >
      <motion.img
        src={src}
        className={`${className} animate-pulse duration-700`}
        alt={altname}
      />
    </motion.div>
  );
};
export default HeroImage;
