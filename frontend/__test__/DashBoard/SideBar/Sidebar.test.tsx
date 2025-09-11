import { render } from "@testing-library/react";
import React from "react";
import { AppSidebar } from "../../../src/components/dashboard/SideBar/Sidebar";
import { SidebarProvider } from "../../../src/components/ui/sidebar";

// window.matchMediaのシンプルなモック
window.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

describe("Sidebar", () => {
  test("正しくレンダリングされること", () => {
    const { container } = render(
      <SidebarProvider>
        <AppSidebar date={new Date()} setDate={() => {}} />
      </SidebarProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
