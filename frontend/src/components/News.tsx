import { Suspense } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Clock, ExternalLink } from "lucide-react";
import { useNews } from "../hooks/useNews";
import type { DateType } from "./dashboard/Dashboard";

// ニュースアイテムの型定義
export interface NewsItem {
  title: string;
  url: string;
  text: string;
  publishedAt: string;
}

interface NewsContentsProps {
  selectedDate?: DateType;
}

const NewsContents = ({ selectedDate }: NewsContentsProps) => {
  const news: NewsItem[] = useNews(selectedDate);
  // 日付を「YYYY-MM-DD」形式で表示する関数
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const limit = new Date(date);
    if (date > limit) return "";
    return date.toISOString().slice(0, 10);
  }

  if (news.length === 0 && selectedDate) {
    return (
      <div className="col-span-full flex justify-center items-center py-8">
        <p className="text-muted-foreground">
          {selectedDate.toLocaleDateString("ja-JP")}のニュースはありません
        </p>
      </div>
    );
  }

  return (
    <>
      {news.map((news, id) => (
        <Card
          key={id}
          className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer border-0 shadow-md bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50"
          onClick={() => window.open(news.url, "_blank")}
        >
          <CardHeader className="">
            <h3 className="font-semibold text-sm leading-tight line-clamp-3 group-hover:text-primary transition-colors">
              {news.title}
            </h3>
          </CardHeader>

          <CardContent className="pt-0 pb-4">
            <p className="text-sm text-muted-foreground line-clamp-10">
              {news.text}
            </p>
          </CardContent>

          <CardFooter className="pt-0 flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <time dateTime={news.publishedAt}>
                {formatDate(news.publishedAt)}
              </time>
            </div>
            <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

interface NewsProps {
  selectedDate?: DateType;
}

const News = ({ selectedDate }: NewsProps = {}) => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          <p className="ml-4 text-gray-600">Loading...</p>
        </div>
      }
    >
      <NewsContents selectedDate={selectedDate} />
    </Suspense>
  );
};

export default News;
