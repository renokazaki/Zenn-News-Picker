import { use } from "react";

type GreetingData = {
  message: string;
};

// データをフェッチする非同期関数
const fetchGreeting = async (): Promise<GreetingData> => {
  // 無限ループを防ぐため、コンソールログを追加して確認
  console.log("Fetching greeting data...");
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/greeting`);
  if (!res.ok) {
    throw new Error("Failed to fetch greeting");
  }
  return res.json();
};

// Promiseをモジュールレベルで一度だけ作成する
const greetingPromise = fetchGreeting();

export const useGreeting = () => {
  // useフックでPromiseの結果を読み取る
  const data = use(greetingPromise);
  return data;
};
