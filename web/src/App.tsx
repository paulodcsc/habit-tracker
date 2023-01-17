import { Habit } from "./components/Habit";
import "./styles/global.css";

function App() {
  return (
    <div className="flex">
      <Habit completed={1} />
      <Habit completed={5} />
      <Habit completed={3} />
    </div>
  );
}

export default App;
