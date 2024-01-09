import TodoForm from "./components/ToDo/TodoForm";
import TodoList from "./components/ToDo/TodoList";
import TodoProvider from "./context/TodoProvider";

const App = () => {
  return (
    <TodoProvider>
      <div>
        <TodoForm />
        <TodoList/>
      </div>
    </TodoProvider>
  );
};

export default App;
