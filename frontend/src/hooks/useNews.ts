import { use } from "react";
import type { NewsItem } from "../components/News";
import type { DateType } from "../components/dashboard/Dashboard";

const fetchNews = async (): Promise<NewsItem[]> => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/n8n/news`);
  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }
  return res.json();
};

const newsPromise = fetchNews();

export const useNews = (selectedDate?: DateType) => {
  const data = use(newsPromise);

  // 日付が選択されていない場合は全てのニュースを返す
  if (!selectedDate) {
    return data;
  }

  // 選択された日付と同じ日付のニュースだけをフィルタリング
  return data.filter((news) => {
    const newsDate = new Date(news.publishedAt);
    return (
      newsDate.getFullYear() === selectedDate.getFullYear() &&
      newsDate.getMonth() === selectedDate.getMonth() &&
      newsDate.getDate() === selectedDate.getDate()
    );
  });
};
