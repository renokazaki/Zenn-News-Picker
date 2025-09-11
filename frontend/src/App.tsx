import Dashboard from "./components/dashboard/MainContent/DashBoard/Dashboard";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Dashboard />
      <Button label="ボン" onClick={() => alert("Click")} />
    </>
  );
}

export default App;
