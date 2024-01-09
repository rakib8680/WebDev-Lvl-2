import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("TodoForm must be used within a TodoProvider");
  }

  const { state, dispatch } = context;
  const [task, setTask] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newTodo = {
      id: Math.random().toString(36).substring(2, 9),
      title: task,
      isCompleted: false,
    };

    dispatch({ type: "addTodo", payload: newTodo });
  };

  return (
    <div className=" mt-20">
      <h1 className="text-center w-full text-4xl font-bold">Add Todo</h1>
      <form className="flex justify-center mt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border border-gray-400 w-2/5 p-2 rounded"
          placeholder="Add Todo"
          onBlur={(e) => setTask(e.target.value)}
        />
        <button className="bg-blue-500 text-white ml-2 px-4 py-2 rounded">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
