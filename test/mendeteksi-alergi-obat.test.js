const request = require("supertest");
const app = require("../app");

describe("POST --> /validasialergiobat", () => {
  test("should return status code 201 if valid resep", async () => {
    const pasien = { alergi: ["ibuprofen"] };
    const resep = [
      {
        obat: "Proris Sirup 60ml",
        kandungan: ["ibuprofen"],
      },
      {
        obat: "Paratusin Sirup 60ml",
        kandungan: ["paracetamol 125mg", "pseudoepedrid 7.5mg", "noscapine 10mg", "ctm 0.5 mg", "guafenisin 25mg", "succus liquiritae 125 ethanol 10 persen"],
      },
    ];

    const expectedResep = [
      {
        obat: "Proris Sirup 60ml",
      },
    ];

    const response = await request(app).post("/validasialergiobat").send({ pasien, resep });
    expect(response.status).toBe(201);
    expect(response.body).toEqual({ resep: expectedResep });
  });
});
