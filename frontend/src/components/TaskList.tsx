import { Suspense, use } from "react";
type Task = {
  id: number;
  name: string;
};
const TaskList = () => {
  // タスクデータをフェッチする非同期関数
  const fetchTasks = async (): Promise<Task[]> => {
    console.log("Fetching tasks data...");
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/tasks`);
    if (!res.ok) {
      throw new Error("Failed to fetch tasks");
    }
    return res.json();
  };

  const tasksPromise = fetchTasks();

  // タスクリストを表示するコンポーネント
  const TaskList = () => {
    const tasks = use(tasksPromise);

    return (
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">タスク一覧</h2>
        {tasks.length === 0 ? (
          <p>タスクがありません</p>
        ) : (
          <ul className="list-disc pl-5">
            {tasks.map((task) => (
              <li key={task.id}>{task.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <Suspense fallback={<p>タスク読み込み中...</p>}>
      <TaskList />
    </Suspense>
  );
};

export default TaskList;
