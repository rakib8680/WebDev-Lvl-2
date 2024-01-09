import { useContext } from "react";
import { TTodo, TodoContext } from "../../context/TodoProvider";

const TodoList = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("TodoList must be used within a TodoProvider");
  }

  const { state } = context;

  console.log(state);

  return (
    <div className="mt-10 ">
      {state.map((todo: TTodo, index: number) => (
        <div key={index} className="flex justify-center gap-0 w-1/3 mx-auto">
          <p className="bg-slate-500 text-slate-200 text-lg font-medium w-fit pe-40 ps-5 py-1 rounded-sm mx-auto mb-3 flex gap-5">
            <p>{index + 1}.</p>
            <p>{todo.title}</p>
          </p>
          <button className="w-fit px-1 py-1 rounded-sm mx-auto mb-3 bg-blue-300 text-white hover:bg-blue-500 transition-all duration-300">
            ✔
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
