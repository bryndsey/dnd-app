import { motion } from "framer-motion";
import loadingIcon from "@/assets/D20.svg";

export function LoadingIndicator() {
  return (
    <div className="size-24">
      <motion.img
        src={loadingIcon}
        animate={{
          y: ["150%", 0],
          transition: {
            y: {
              duration: 0.5,
              repeat: Infinity,
              ease: "circOut",
              repeatType: "reverse",
            },
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          },
          opacity: 1,
          rotate: 360,
        }}
        exit={{ opacity: 0, scale: 0, transition: { delay: 0.75 } }}
        key={"loading"}
        className="size-1/3 m-auto"
      />
    </div>
  );
}
