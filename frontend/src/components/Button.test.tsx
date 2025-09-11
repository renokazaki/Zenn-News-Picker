import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("buttonタグがレンダリングされる", () => {
    render(<Button label="テスト" onClick={() => alert("click")} />);
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("テスト");
  });
});
