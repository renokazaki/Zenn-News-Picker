import { render } from "@testing-library/react";
import React from "react";
import Header from "../../../src/components/dashboard/MainContent/Header/Header";
import { SidebarProvider } from "../../../src/components/ui/sidebar";
import "@testing-library/jest-dom";
import { createStore, Provider } from "jotai";

// window.matchMediaのシンプルなモック
window.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

describe("Header", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResult = render(
      <Provider store={createStore()}>
        <SidebarProvider>
          <Header />
        </SidebarProvider>
      </Provider>
    );
    container = renderResult.container;
  });

  test("正しくレンダリングされること", () => {
    expect(container).toBeDefined();
  });

  test("スナップショットと一致すること", () => {
    expect(container).toMatchSnapshot();
  });
});
