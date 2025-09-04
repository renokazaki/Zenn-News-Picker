import { use } from "react";

export type Task = {
  id: number;
  name: string;
};

const fetchTasks = async (): Promise<Task[]> => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/tasks`);
  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }
  return res.json();
};

const tasksPromise = fetchTasks();

export const useTasks = () => {
  const tasks = use(tasksPromise);
  return tasks;
};
