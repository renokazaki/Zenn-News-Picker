import type { NewsItem } from "../../../src/type/News.type";

// テスト用のモックデータ
const mockNewsData: NewsItem[] = [
  {
    title: "テストニュース1",
    url: "https://example.com/1",
    text: "これはテストニュースです",
    publishedAt: "2025-09-10T10:00:00Z",
  },
  {
    title: "テストニュース2",
    url: "https://example.com/2",
    text: "これは2つ目のテストニュースです",
    publishedAt: "2025-09-11T15:30:00Z",
  },
];

// モック関数
const mockUseNewsFn = (selectedDate?: Date) => {
  if (!selectedDate) {
    return mockNewsData;
  }

  const month = selectedDate.getMonth() + 1;
  const day = selectedDate.getDate();
  const selectedDateStr = `${selectedDate.getFullYear()}-${
    month < 10 ? "0" + month : month
  }-${day < 10 ? "0" + day : day}`;

  return mockNewsData.filter((news) => {
    const newsDateStr = news.publishedAt.split("T")[0];
    return newsDateStr === selectedDateStr;
  });
};

// モジュールをモック化
jest.mock(
  "../../../src/components/dashboard/MainContent/DashBoard/useNews.Hook",
  () => ({
    useNews: jest.fn(mockUseNewsFn),
  })
);

// モック化したuseNewsをインポート
import { useNews } from "../../../src/components/dashboard/MainContent/DashBoard/useNews.Hook";

describe("useNewsのテスト", () => {
  beforeEach(() => {
    (useNews as jest.Mock).mockClear();
  });

  test("日付が未選択の場合、全てのニュースを返す", () => {
    const news = useNews();

    expect(news).toBeDefined();
    expect(news).toHaveLength(2);
    expect(news[0].title).toBe("テストニュース1");
    expect(news[0].url).toBe("https://example.com/1");
    expect(news[0].text).toBe("これはテストニュースです");
    expect(news[0].publishedAt).toBe("2025-09-10T10:00:00Z");
    expect(news[1].title).toBe("テストニュース2");
    expect(news[1].url).toBe("https://example.com/2");
    expect(news[1].text).toBe("これは2つ目のテストニュースです");
    expect(news[1].publishedAt).toBe("2025-09-11T15:30:00Z");
  });

  test("選択日と一致するニュースのみを返す", () => {
    const news = useNews(new Date(2025, 8, 10));

    expect(news).toHaveLength(1);
    expect(news[0].title).toBe("テストニュース1");
    expect(news[0].url).toBe("https://example.com/1");
    expect(news[0].text).toBe("これはテストニュースです");
    expect(news[0].publishedAt).toBe("2025-09-10T10:00:00Z");
  });

  test("選択日に一致するニュースがない場合、空配列を返す", () => {
    const news = useNews(new Date(2025, 8, 15));

    expect(news).toHaveLength(0);
  });
});
