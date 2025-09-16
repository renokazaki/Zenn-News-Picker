import { render, screen } from "@testing-library/react";
import React from "react";
import BreadcrumbComponents from "../../../src/components/dashboard/MainContent/Header/Breadcrumb";
import "@testing-library/jest-dom";
import { createStore, Provider } from "jotai";

describe("Breadcrumb", () => {
  let container: HTMLElement;

  test("日付がある場合、正しく表示されること", () => {
    const renderResult = render(
      <Provider store={createStore()}>
        <BreadcrumbComponents />
      </Provider>
    );
    container = renderResult.container;

    expect(container).toBeDefined();
  });

  test("日付がない場合、デフォルトテキストが表示されること", () => {
    const renderResult = render(
      <Provider store={createStore()}>
        <BreadcrumbComponents />
      </Provider>
    );
    container = renderResult.container;

    expect(container).toBeDefined();
    expect(screen.getByText("All Day's News")).toBeInTheDocument();
  });

  test("スナップショットと一致すること", () => {
    const { container } = render(
      <Provider store={createStore()}>
        <BreadcrumbComponents />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
