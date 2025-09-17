"use client";
import { Task } from "@/app/types/Task";
import { useState } from "react";
import Tasks from "@/lib/Task.json";

export default function useTaskCount() {
  const [tasks, setTasks] = useState<Task[]>(Tasks || []);

  function addTask(task: Task) {
    setTasks((prev) => [...prev, task]);
  }

  function removeTask(index: number) {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  }

  function updateStatus(index: number) {
    setTasks((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, ready: !item.ready } : item
      )
    );
  }

  const taskCount = tasks.length;

  return { tasks, addTask, removeTask, updateStatus, taskCount };
}
