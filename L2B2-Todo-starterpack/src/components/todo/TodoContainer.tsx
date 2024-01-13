import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <AddTodoModal />
        <TodoFilter />
      </div>
      {todos.length > 0 ? (
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos.map((item, index) => (
            <TodoCard {...item} key={index} />
          ))}
        </div>
      ) : (
        <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task to show</p>{" "}
        </div>
      )}
    </div>
  );
};

export default TodoContainer;
