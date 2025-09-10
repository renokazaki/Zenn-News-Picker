import { Suspense } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../../components/ui/card";
import { Clock, ExternalLink } from "lucide-react";
import { useNews } from "./useNews.Hook";
import type { NewsItem, DateType } from "../../../../type/News.type";
import { formatDate } from "../../../../lib/formatdate";

interface NewsContentsProps {
  selectedDate?: DateType;
}

const NewsContents = ({ selectedDate }: NewsContentsProps) => {
  const news: NewsItem[] = useNews(selectedDate);

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
      <main className="flex-1 space-y-6 p-4 md:p-6 lg:p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <section className="space-y-4">
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            <NewsContents selectedDate={selectedDate} />
          </div>
        </section>
      </main>
    </Suspense>
  );
};

export default News;
