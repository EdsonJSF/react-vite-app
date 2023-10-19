import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Tests on 05-funciones", () => {
  test("getUser should return a object", () => {
    const testUSer = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUSer).toEqual(user);
  });

  test("getUsuarioActivo should return a object", () => {
    const testUSer = {
      uid: "ABC567",
      username: "El_Papi1502",
    };

    const user = getUsuarioActivo(testUSer.username);

    expect(testUSer).toStrictEqual(user);
  });
});
