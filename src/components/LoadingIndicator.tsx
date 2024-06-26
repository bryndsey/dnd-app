import { motion } from "framer-motion";
import loadingIcon from "@/assets/D20.svg";

export function LoadingIndicator() {
  return (
    <div className="size-32" role="progressbar" aria-label="Loading indicator">
      <motion.img
        src={loadingIcon}
        animate={{
          y: ["150%", 0],
          transition: {
            // This animates the die bouncing up and down
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
          // This animates the die spinning back and forth
          rotate: 360,
        }}
        exit={{
          opacity: 0,
          scale: 0,
          transition: {
            // Add a short delay so the indicator doesn't just flash on-screen and then disappear.
            // It does add some extra delay for users, but I think it feels less jarring.
            delay: 0.75,
          },
        }}
        key={"loading"}
        className="m-auto size-2/5"
        role="presentation"
      />
    </div>
  );
}
