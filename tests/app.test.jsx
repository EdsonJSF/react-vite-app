import { render } from "@testing-library/react";
import { App } from "../src/components/app";

describe("Test on <App />", () => {
  test("should match with the snapshot", () => {
    const title = "Hola";
    const { container } = render(<App title={title} />);

    expect(container).toMatchSnapshot();
  });

  test("should show the title in a h1 tag", () => {
    const title = "Hola";
    const { container, getByText, getByTestId } = render(<App title={title} />);

    expect(getByText(title)).toBeTruthy();
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("should show the subtitle", () => {
    const title = "Hola";
    const subTitle = "subTitle";
    const { getAllByText } = render(<App title={title} subTitle={subTitle} />);

    expect(getAllByText(subTitle).length).toBe(2);
  });
});
