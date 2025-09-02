import Greeting from "./components/Greeting";
import TaskList from "./components/TaskList";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Frontend</h2>
      <Greeting />
      <TaskList />
      <Button />
    </div>
  );
}

export default App;
