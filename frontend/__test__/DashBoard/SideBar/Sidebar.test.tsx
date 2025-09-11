import { render, screen } from "@testing-library/react";
import React from "react";
import { AppSidebar } from "../../../src/components/dashboard/SideBar/Sidebar";
import { SidebarProvider } from "../../../src/components/ui/sidebar";
import "@testing-library/jest-dom";

// window.matchMediaのシンプルなモック
window.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

describe("Sidebar", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResult = render(
      <SidebarProvider>
        <AppSidebar date={new Date()} setDate={() => {}} />
      </SidebarProvider>
    );
    container = renderResult.container;
  });

  test("正しくレンダリングされること", () => {
    expect(container).toBeDefined();
  });

  test("スナップショットと一致すること", () => {
    expect(container).toMatchSnapshot();
  });

  test("ヘッダーが表示されること", () => {
    expect(screen.getByText("興味ありそうなNews一覧📰")).toBeInTheDocument();
  });
});
