import { Suspense } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, ExternalLink } from "lucide-react";
import { useNews } from "../hooks/useNews";

// ニュースアイテムの型定義
interface NewsItem {
  title: string;
  url: string;
  text: string;
  imageUrl?: string;
}

const NewsContents= () =>  {
  const news: NewsItem[] = useNews();

  return (
    <>
      {news.map((news, id) => (
        <Card
          key={id}
          className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer border-0 shadow-md bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50"
          onClick={() => window.open(news.url, "_blank")}
        >
          {/* カードヘッダー（画像がある場合） */}
          {news.imageUrl && (
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={news.imageUrl}
                alt={news.title}
                className="h-48 w-full object-cover transition-transform duration-200 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2">
                <Badge
                  variant="secondary"
                  className="bg-white/90 text-gray-900"
                >
                  test
                </Badge>
              </div>
            </div>
          )}

          <CardHeader className="pb-3">
            <h3 className="font-semibold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {news.title}
            </h3>
          </CardHeader>

          <CardContent className="pt-0 pb-4">
            <p className="text-sm text-muted-foreground line-clamp-3">
              {news.text}
            </p>
          </CardContent>

          <CardFooter className="pt-0 flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {/* <time dateTime={news.publishedAt}>
                {formatDate(news.publishedAt)}
              </time> */}
            </div>
            <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
        
        const News = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          <p className="ml-4 text-gray-600">Loading...</p>
        </div>
      }
    >
      <NewsContents />
    </Suspense>
  );
};

export default News;
