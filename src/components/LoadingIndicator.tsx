import { motion } from "framer-motion";
import loadingIcon from "@/assets/D20.svg";

export function LoadingIndicator() {
  return (
    <div className="size-24">
      <motion.div
        animate={{
          y: ["150%", 0],
          transition: {
            duration: 0.5,
            repeat: Infinity,
            ease: "circOut",
            repeatType: "reverse",
          },
        }}
        exit={{ transition: { delay: 0.75 } }}
        key={"loading"}
        className="size-1/3 m-auto"
      >
        <motion.div
          animate={{
            opacity: 1,
            rotate: 360,
            scale: 1,
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
            },
          }}
          exit={{ opacity: 0, scale: 0, transition: { delay: 0.75 } }}
          className="size-full"
        >
          <img src={loadingIcon} className="size-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}
