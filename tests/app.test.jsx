import { render } from "@testing-library/react";
import { App } from "../src/components/app";

describe("Test on <App />", () => {
  test("should match with the snapshot", () => {
    const title = "Hola";
    const { container } = render(<App title={title} />);

    expect(container).toMatchSnapshot();
  });
});
