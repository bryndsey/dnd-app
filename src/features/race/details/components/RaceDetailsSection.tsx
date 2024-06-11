import { ErrorDisplay } from "@/components/ErrorDisplay";
import { LoadingIndicator } from "@/components/LoadingIndicator";
import { AnimatePresence, motion } from "framer-motion";
import { useRace } from "../hooks/useRace";
import { RaceDetailsContent } from "./RaceDetailsContent";

export interface RaceDetailsProps {
  index: string;
}

export function RaceDetailsSection({ index }: RaceDetailsProps) {
  const result = useRace(index);

  return (
    <AnimatePresence mode="wait">
      {result.status === "pending" && <LoadingIndicator />}

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
}
