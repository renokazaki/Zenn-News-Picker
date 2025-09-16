import { render } from "@testing-library/react";
import { CalendarPicker } from "../../../src/components/dashboard/SideBar/CalendarPicker";
import React from "react";
import { createStore, Provider } from "jotai";

describe("calender", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResult = render(
      <Provider store={createStore()}>
        <CalendarPicker />
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
