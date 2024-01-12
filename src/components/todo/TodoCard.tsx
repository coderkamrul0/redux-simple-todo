import { Button } from "../ui/button";

const TodoCard = () => {
  return (
    <div>
      <div className="bg-white rounded-xl flex justify-between items-center p-3 border">
        <input type="checkbox" name="" id="" />
        <p className="font-semibold">Todo Title</p>
        <p>Time</p>
        <p>Description</p>
        <div className="space-x-5">
          <Button>Delete</Button>
          <Button>Edit</Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
