import { render, screen } from "@testing-library/react";
import React from "react";
import BreadcrumbComponents from "../../../src/components/dashboard/MainContent/Header/Breadcrumb";
import "@testing-library/jest-dom";

describe("Breadcrumb", () => {
  let container: HTMLElement;

  test("日付がある場合、正しく表示されること", () => {
    const testDate = new Date("2025-09-15");
    const renderResult = render(<BreadcrumbComponents date={testDate} />);
    container = renderResult.container;

    expect(container).toBeDefined();
    expect(screen.getByText(testDate.toLocaleDateString())).toBeInTheDocument();
  });

  test("日付がない場合、デフォルトテキストが表示されること", () => {
    const renderResult = render(<BreadcrumbComponents date={undefined} />);
    container = renderResult.container;

    expect(container).toBeDefined();
    expect(screen.getByText("All Day's News")).toBeInTheDocument();
  });

  test("スナップショットと一致すること", () => {
    const testDate = new Date("2025-09-15");
    const { container } = render(<BreadcrumbComponents date={testDate} />);
    expect(container).toMatchSnapshot();
  });
});
