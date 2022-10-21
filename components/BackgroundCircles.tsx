import { motion } from "framer-motion";

interface BackgroundCirclesProps {}

function BackgroundCircles({}: BackgroundCirclesProps) {
  return (
    <motion.div
      className="absolute flex items-center justify-center"
      initial={{
        opacity: 0
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
      }}
      transition={{
        duration: 2.5
      }}
    >
      <div className="rounded-1/2 absolute h-[200px] w-[200px] animate-ping border border-gray-600" />
      <div className="rounded-1/2 absolute h-[300px] w-[300px] animate-ping border border-gray-500" />
      <div className="rounded-1/2 absolute h-[500px] w-[500px] animate-ping border border-gray-500" />
      <div className="rounded-1/2 absolute h-[650px] w-[650px] animate-pulse border border-primary" />
      <div className="rounded-1/2 absolute h-[800px] w-[800px] border border-gray-400" />
    </motion.div>
  );
}

export default BackgroundCircles;
