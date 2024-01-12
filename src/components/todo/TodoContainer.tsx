import { Button } from "../ui/button";
import TodoCard from "./todoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <Button className="bg-primary-gradient text-xl font-semibold">Add todo</Button>
        <Button>Filter</Button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
        {/* <div className="bg-white p-5 flex justify-center items-center rounded-xl text-2xl font-bold">
          <p>There is no task pending.</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
