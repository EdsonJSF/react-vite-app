import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/components/CounterApp";

describe("Test on <CounterApp />", () => {
  const value = 100;

  test("should match with the snapshot", () => {
    const { container } = render(<CounterApp value={value} />);

    expect(container).toMatchSnapshot();
  });

  test("should show the 100 in a h2 tag", () => {
    render(<CounterApp value={value} />);

    expect(screen.getByText(value)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      value.toString()
    );
  });
});
