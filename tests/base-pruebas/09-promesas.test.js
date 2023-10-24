import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Tests on 09-promesas", () => {
  test("Should return a promise of a Hero", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("Should return a error if a Hero doesnt exist", (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch((error) => {
        expect(error).toBe("No se pudo encontrar el héroe con id " + id);
        done();
      });
  });
});
