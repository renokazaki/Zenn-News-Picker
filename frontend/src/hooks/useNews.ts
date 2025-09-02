import { use } from "react";

type NewsData = {
  title: string;
  text: string;
  url: string;
};

// データをフェッチする非同期関数
const fetchNews = async (): Promise<NewsData[]> => {
  // 無限ループを防ぐため、コンソールログを追加して確認
  console.log("Fetching news data...");
  const res = await fetch(`${import.meta.env.VITE_API_URL}/n8n/news`);
  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }
  return res.json();
};

// Promiseをモジュールレベルで一度だけ作成する
const newsPromise = fetchNews();

export const useNews = () => {
  // useフックでPromiseの結果を読み取る
  const data = use(newsPromise);
  return data;
};
