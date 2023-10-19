import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Tests on 08-imp-exp", () => {
  test("getHeroeById should return a Heroe by Id", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById should return undefined if doesnt exist a heroe", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner should return a DC Heroes Array by Owner", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    expect(heroes).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
    expect(heroes.length).toBe(3);
  });

  test("getHeroesByOwner should return a Marvel Heroes Array by Owner", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes).toEqual([
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ]);
    expect(heroes.length).toBe(2);
  });

  test("getHeroesByOwner should return undefined if doesnt exist a heroe", () => {
    const owner = "";
    const heroes = getHeroesByOwner(owner);

    expect(heroes).toEqual([]);
    expect(heroes.length).toBe(0);
  });
});
