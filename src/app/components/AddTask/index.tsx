"use client";
import { useState } from "react";
import { Task } from "@/app/types/Task";

type Props = {
  addTask: (task: Task) => void;
};

const AddTask = ({ addTask }: Props) => {
  const [content, setContent] = useState("");

  function handleAdd() {
    if (!content.trim()) return;
    addTask({ content, ready: false });
    setContent("");
  }

  return (
    <div className="flex w-full mb-[0.6em] justify-center items-center">
      <input
        type="text"
        placeholder="Add your task"
        className="outline-none border-0 bg-[#374151] rounded-l-full text-[#FFFFFF] w-[15em] p-[1em]"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="p-[1em] rounded-r-full bg-[#FF5A4E] border-0"
        onClick={handleAdd}
      >
        ADD
      </button>
    </div>
  );
};

export default AddTask;
