import { fireEvent, render, screen } from "@testing-library/react";
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

  test("should increment with +1 btn", () => {
    render(<CounterApp value={value} />);

    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText(value + 1)).toBeTruthy();
  });

  test("should decrement with -1 btn", () => {
    render(<CounterApp value={value} />);

    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText(value - 1)).toBeTruthy();
  });

  test("should work reset btn", () => {
    render(<CounterApp value={value} />);

    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByText(value)).toBeTruthy();
  });
});
