/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {

  const [priority, setPriority] = useState('')
  // from server
  const { data: todos, isLoading } = useGetTodosQuery(priority);
  if (isLoading) {
    return <p>Loading</p>;
  }


  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        {todos?.data?.length <= 0 ? (
          <>
            <div className="bg-white p-5 flex justify-center items-center rounded-xl text-2xl font-bold">
              <p>There is no task pending.</p>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
              {todos?.data?.map((item: { _id: any; }) => (
                <TodoCard item={item} key={item._id} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
