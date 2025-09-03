import { Suspense } from "react";
import { useTasks } from "../hooks/useTasks";

const TaskListContent = () => {
  // カスタムフックを使用してタスクデータを取得
  const tasks = useTasks();

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">一覧</h2>
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

const TaskList = () => {
  return (
    <Suspense fallback={<p>タスク読み込み中...</p>}>
      <TaskListContent />
    </Suspense>
  );
};

export default TaskList;
