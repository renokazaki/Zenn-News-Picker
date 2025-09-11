import { CardFooter } from "../../../../ui/card";
import { Clock, ExternalLink } from "lucide-react";
import type { NewsItem } from "../../../../../type/News.type";
import { formatDate } from "../../../../../lib/formatdate";

interface NewsFotterProps {
  news: NewsItem;
}

const NewsFotter = ({ news }: NewsFotterProps) => {
  return (
    <CardFooter className="pt-0 flex items-center justify-between">
      <div className="flex items-center gap-1 text-xs text-muted-foreground">
        <Clock className="h-3 w-3" />
        <time dateTime={news.publishedAt}>{formatDate(news.publishedAt)}</time>
      </div>
      <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
    </CardFooter>
  );
};

export default NewsFotter;
