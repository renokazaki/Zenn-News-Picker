import { render, screen } from "@testing-library/react";
import React from "react";
import NewsContents from "../../../src/components/dashboard/MainContent/DashBoard/NewsContents/NewsContents";

// useNews.Hook.ts のモック
jest.mock(
  "../../../src/components/dashboard/MainContent/DashBoard/useNews.Hook",
  () => ({
    useNews: jest.fn().mockReturnValue([
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
    ]),
  })
);

describe("NewsContents", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResult = render(<NewsContents selectedDate={new Date()} />);
    container = renderResult.container;
  });

  test("正しくレンダリングされること", () => {
    expect(container).toBeDefined();
    expect(screen.getByText("テストニュース1")).toBeDefined();
    expect(screen.getByText("テストニュース2")).toBeDefined();
    expect(screen.getByText("これはテストニュースです")).toBeDefined();
    expect(screen.getByText("これは2つ目のテストニュースです")).toBeDefined();
    expect(screen.getByText("2025-09-10")).toBeDefined();
    expect(screen.getByText("2025-09-11")).toBeDefined();
  });

  test("スナップショットと一致すること", () => {
    expect(container).toMatchSnapshot();
  });
});
