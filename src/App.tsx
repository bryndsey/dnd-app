import { CommonProviders } from "./components/providers/CommonProviders";
import { ClassListSection } from "./features/class/ClassList";

function App() {
  return (
    <CommonProviders>
      <h1>Dungeons and Dragons Character Guide</h1>
      <div className="p-4 border m-2">
        <ClassListSection />
      </div>
    </CommonProviders>
  );
}

export default App;
