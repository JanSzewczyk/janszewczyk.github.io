import { motion } from "framer-motion";

export default function BackgroundCircles() {
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
      <div className="absolute h-[200px] w-[200px] animate-ping rounded-1/2 border border-gray-350" />
      <div className="absolute h-[300px] w-[300px] animate-ping rounded-1/2 border border-gray-350" />
      <div className="absolute h-[500px] w-[500px] animate-ping rounded-1/2 border border-gray-350" />
      <div className="absolute h-[650px] w-[650px] animate-pulse rounded-1/2 border border-primary-500" />
      <div className="absolute h-[800px] w-[800px] animate-pulse rounded-1/2 border border-gray-350/80" />
    </motion.div>
  );
}
