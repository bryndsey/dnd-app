import { useRace } from "../hooks/useRace";
import { ErrorDisplay } from "@/components/ErrorDisplay";
import { RaceDetailsContent } from "./RaceDetailsContent";
import { AnimatePresence, motion } from "framer-motion";
import loadingIcon from "@/assets/D20.svg";

export interface RaceDetailsProps {
  index: string;
}

export function RaceDetailsSection({ index }: RaceDetailsProps) {
  const result = useRace(index);

  return (
    <AnimatePresence mode="wait">
      {result.status === "pending" && (
        <div className="h-16">
          <motion.div
            animate={{
              y: [64, 0],
              transition: {
                duration: 0.5,
                repeat: Infinity,
                ease: "circOut",
                repeatType: "reverse",
              },
            }}
            exit={{ transition: { delay: 3.5 } }}
            key={"loading"}
            className="size-16"
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
              exit={{ opacity: 0, scale: 0, transition: { delay: 3.5 } }}
              className="size-16"
            >
              <img src={loadingIcon} className="size-full" />
            </motion.div>
          </motion.div>
        </div>
      )}

      {result.status === "error" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={"error"}
        >
          <ErrorDisplay message="An error occurred while trying to fetch details" />
        </motion.div>
      )}

      {result.status === "success" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={"success"}
        >
          <RaceDetailsContent data={result.data} />
        </motion.div>
      )}
    </AnimatePresence>
  );
  // if (result.status === "pending") {
  //   return <p>Loading...</p>;
  // }

  // if (result.status === "error") {
  //   return (
  //     <ErrorDisplay message="An error occurred while trying to fetch details" />
  //   );
  // }

  // return <div>{<RaceDetailsContent data={result.data} />}</div>;
}
