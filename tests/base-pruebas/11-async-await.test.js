import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Tests on 11-async-await", () => {
  test("should return an URL", async () => {
    const url = await getImagen();

    expect(typeof url).toBe("string");
  });
});
