import { createLazyFileRoute } from "@tanstack/react-router";
import { ClassListSection } from "../features/class/ClassList";

export const Route = createLazyFileRoute("/")({
  component: () => (
    <div className="p-4 border m-2">
      <ClassListSection />
    </div>
  ),
});
