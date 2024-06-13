import { useRaceList } from "../hooks/useRaceList";
import { ErrorDisplay } from "@/components/ErrorDisplay";
import { RaceListContent } from "./RaceListContent";
import { LoadingIndicator } from "@/components/LoadingIndicator";
import { AnimatePresence, motion } from "framer-motion";

export function RaceListSection() {
  const result = useRaceList();

  return (
    <AnimatePresence mode="wait">
      {result.status === "pending" && (
        <div className="grid place-items-center py-10">
          <LoadingIndicator />
        </div>
      )}

      {result.status === "error" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={"error"}
        >
          <ErrorDisplay message="An error occurred while trying to fetch the list of races" />
        </motion.div>
      )}

      {result.status === "success" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={"success"}
          className="space-y-4"
        >
          <h2 className="text-4xl font-bold">Races</h2>
          <RaceListContent races={result.data} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
