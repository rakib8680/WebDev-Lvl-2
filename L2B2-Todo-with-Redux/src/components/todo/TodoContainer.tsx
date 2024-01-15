import { useGetTodosQuery } from "@/redux/api/api";
import AddTodoModal from "./AddTodoModal";
import TodoCard, { TTodoCardProps } from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useState } from "react";

const TodoContainer = () => {
  // from local state
  // const { todos } = useAppSelector((state) => state.todos);

  const [priority, setPriority] = useState("");

  // from server
  const { data: todos, isLoading } = useGetTodosQuery(priority);

  if (isLoading)
    return <p className="text-center text-2xl text-sky-700">Loading...</p>;

  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      {todos?.data?.length > 0 ? (
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data?.map((item: TTodoCardProps, index: number) => (
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
