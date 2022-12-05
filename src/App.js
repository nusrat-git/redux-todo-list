import "./App.css";
import { TodoList } from "./Components/TodoList";

function App() {
  return (
    <div className="md:w-1/2 mx-auto bg-gray-200 md:h-[745px]">
      <TodoList />
    </div>
  );
}

export default App;
