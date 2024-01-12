/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ArchiveBoxArrowDownIcon,
  PencilSquareIcon,
} from "@heroicons/react/16/solid";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";

const TodoCard = ({ item }: any) => {
  const dispatch = useAppDispatch();

  const toggleState = () => {
    dispatch(toggleComplete(item.id));
  };
  return (
    <div>
      <div className="bg-white rounded-xl flex justify-between items-center p-3 border">
        <input
          onChange={toggleState}
          className="bg-black"
          checked={item.isCompleted}
          type="checkbox"
          name="complete"
          id="complete"
        />
        <p className="font-semibold">{item.title}</p>
        <div>
          {item.isCompleted ? (
            <p className="text-green-500">Done</p>
          ) : (
            <p className="text-red-500">Pending</p>
          )}
        </div>
        <p>{item.priority}</p>
        <p>{item.description}</p>
        <div className="space-x-5">
          <Button
            onClick={() => dispatch(removeTodo(item.id))}
            className="bg-red-500"
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
