import { Suspense } from "react";
import { useNews } from "../hooks/useNews";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const NewsContent = () => {
  const news = useNews();

  return (
    <div className="mt-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        ニュース一覧
      </h2>
      {news.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">ニュースがありません</p>
        </div>
      ) : (
        <div className="w-full flex flex-col">
          {news.map((item, id) => (
            <Card
              key={id}
              className="w-125 gap-4 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 transition-colors duration-200 line-clamp-20">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                  {item.text}
                </p>
                <div className="mt-4 flex justify-end">
                  <a
                    href={item.url}
                    className="text-blue-500 hover:text-blue-700 font-medium text-sm transition-colors duration-200 cursor-pointer"
                  >
                    詳しく見る →
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

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
      <NewsContent />
    </Suspense>
  );
};

export default News;
