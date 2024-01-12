import { ArchiveBoxArrowDownIcon, PencilSquareIcon } from "@heroicons/react/16/solid";
import { Button } from "../ui/button";

const TodoCard = () => {
  return (
    <div>
      <div className="bg-white rounded-xl flex justify-between items-center p-3 border">
        <input type="checkbox" name="" id="" />
        <p className="font-semibold">Todo Title</p>
        {/* <p>Time</p> */}
        <p>Description</p>
        <div className="space-x-5">
          <Button className="bg-red-500">
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
