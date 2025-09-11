import { render } from "@testing-library/react";
import React from "react";
import { CalendarPicker } from "../../../src/components/dashboard/SideBar/CalendarPicker";

describe("calender", () => {
  test("正しくレンダリングされること", () => {
    const { container } = render(
      <CalendarPicker date={new Date()} setDate={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });
});
