/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ArchiveBoxArrowDownIcon,
  PencilSquareIcon,
} from "@heroicons/react/16/solid";
import { Button } from "../ui/button";
import {
  useDeleteTodosMutation,
  useUpdateTodosMutation,
} from "@/redux/api/api";

const TodoCard = ({ item }: any) => {
  const [updateTodo] = useUpdateTodosMutation();
  const [deleteTodo, { isLoading: deleteLoading }] = useDeleteTodosMutation();
  const toggleState = () => {
    const taskData = {
      title: item.title,
      description: item.description,
      priority: item.priority,
      isCompleted: !item.isCompleted,
    };

    const options = {
      id: item._id,
      data: taskData,
    };

    console.log(options);
    updateTodo(options);
  };

  const handleDelete = () => {
    deleteTodo(item._id);
  };
  return (
    <div>
      <div className="bg-white rounded-xl flex justify-between items-center p-3 border">
        <input
          onChange={toggleState}
          className="bg-black mr-2"
          type="checkbox"
          name="complete"
          id="complete"
          defaultChecked={item.isCompleted}
        />
        <p className="font-semibold flex-1">{item.title}</p>
        <div className="flex-1 flex items-center gap-2">
          <div
            className={`size-3 rounded-full ${
              item.priority === "high"
                ? "bg-red-500"
                : item.priority === "medium"
                ? "bg-yellow-500"
                : "bg-green-500"
            }`}
          ></div>

          <p className="flex-1 capitalize">{item.priority}</p>
        </div>
        <div className="flex-1">
          {item.isCompleted ? (
            <p className="text-green-500">Done</p>
          ) : (
            <p className="text-red-500">Pending</p>
          )}
        </div>
        <p className="flex-1 text-sm">{item.description}</p>
        <div className="space-x-5">
          <Button
            className="bg-red-500"
            onClick={handleDelete}
            disabled={deleteLoading}
          >
            <ArchiveBoxArrowDownIcon className="h-6 w-6 text-white" />
          </Button>
          <Button className="bg-[#5C53FE]">
            <PencilSquareIcon className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
