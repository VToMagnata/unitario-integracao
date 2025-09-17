"use client";
import { Task } from "@/app/types/Task";
import AddTask from "../AddTask";

type Props = {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (index: number) => void;
  updateStatus: (index: number) => void;
  taskCount: number;
};

const T = ({ tasks, addTask, removeTask, updateStatus, taskCount }: Props) => {
  return (
    <main className="w-[25em] h-[20em] bg-[#9CA3AF] rounded-[1em] flex flex-col items-center gap-[1.2em] p-[1.4em] overflow-y-auto overflow-x-hidden">
      <header className="flex items-center justify-between w-full">
        <AddTask addTask={addTask} />
        <h1 className="">{taskCount}</h1>
      </header>
      {tasks.map((item, index) => (
        <div
          key={index}
          className="w-full h-[2em] p-[0.2em] flex justify-between rounded-full bg-[#374151] p-2 mb-2"
        >
          <span className="w-[80%] flex gap-[0.3em] p-[0.4em] items-center">
            <img
              src={item.ready ? "/img-true.png" : "/img-false.png"}
              alt="status"
              className="cursor-pointer w-[1.5em]"
              onClick={() => updateStatus(index)}
            />
            <h1
              className={`text-gray-700 text-[0.8em] ${
                item.ready ? "line-through" : ""
              }`}
            >
              {item.content}
            </h1>
          </span>
          <img
            src="/lixo.png"
            alt="delete"
            className="cursor-pointer w-[1.8em] p-[0.2em]"
            onClick={() => removeTask(index)}
          />
        </div>
      ))}
    </main>
  );
};

export default T;
