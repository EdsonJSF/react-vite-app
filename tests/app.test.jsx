import { render, screen } from "@testing-library/react";
import { App } from "../src/components/app";

describe("Test on <App />", () => {
  const title = "Hola";
  const subTitle = "subTitle";

  test("should match with the snapshot", () => {
    const { container } = render(<App title={title} />);

    expect(container).toMatchSnapshot();
  });

  test("should show the title in a h1 tag", () => {
    render(<App title={title} />);

    expect(screen.getByText(title)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("should show the subtitle", () => {
    render(<App title={title} subTitle={subTitle} />);

    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
