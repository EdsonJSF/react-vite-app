import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Tests on 07-deses-arr", () => {
  test("Should return an Array [string, number]", () => {
    const [letters, numbers] = retornaArreglo();

    expect(letters).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));
  });
});
