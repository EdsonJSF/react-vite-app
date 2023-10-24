import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Test on 06-deses-obj", () => {
  test("Should return a object", () => {
    const payload = { clave: "pass", nombre: "name", edad: 10, rango: "range" };
    const context = usContext(payload);

    expect(context).toEqual({
      nombreClave: payload.clave,
      anios: payload.edad,
      nombre: payload.nombre,
      rango: payload.rango,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
