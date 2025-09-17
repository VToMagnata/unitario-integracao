// src/app/page.tsx
"use client";
import T from "./components/Task";
import useTaskCount from "@/lib/hooks/useTaskCount";

const Home = () => {
  const { tasks, addTask, removeTask, updateStatus, taskCount } =
    useTaskCount();

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <T
        tasks={tasks}
        addTask={addTask}
        removeTask={removeTask}
        updateStatus={updateStatus}
        taskCount={taskCount}
      />
    </main>
  );
};

export default Home;
