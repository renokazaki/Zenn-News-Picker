import { use } from "react";

export type Task = {
  id: number;
  name: string;
};

// タスクデータをフェッチする非同期関数
const fetchTasks = async (): Promise<Task[]> => {
  console.log("Fetching tasks data...");
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/tasks`);
  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }
  return res.json();
};

// Promiseをモジュールレベルで一度だけ作成する
const tasksPromise = fetchTasks();

export const useTasks = () => {
  // useフックでPromiseの結果を読み取る
  const tasks = use(tasksPromise);
  return tasks;
};
