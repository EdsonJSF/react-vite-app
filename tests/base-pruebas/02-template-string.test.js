import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Test on 02-template-string.js", () => {
  test('get Saludo should return "Hola test"', () => {
    const name = "test";
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`);
  });
});
