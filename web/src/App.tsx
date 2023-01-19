import { Habit } from "./components/Habit";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Habit completed="oi" />
      <Habit completed="pedro" />
      <Habit completed="feioso" />
      <Habit completed="meu" />
      <Habit completed="amorzinho" />
      <Habit completed="feioso" />

    </div>
  );
}

export default App;
