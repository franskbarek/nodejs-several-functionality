const request = require("supertest");
const app = require("../app");

describe("POST --> /hitunggaji", () => {
  //positive case
  it("should return 201 if success create employee indonesia", async () => {
    const employee = {
      name: "John",
      id: "123",
      nationality: "Indonesia",
      marital_status: "K1",
    };

    const komponengaji = [
      {
        name: "Basic Salary",
        amount: 25000000,
      },
      {
        name: "Allowance",
        amount: 5000000,
      },
    ];
    let gaji_perbulan = 0;
    komponengaji.forEach((elem) => {
      gaji_perbulan += elem.amount;
    });

    const pajak_bulanini = {
      pajak_bulanini: "3.146.000",
    };

    await request(app)
      .post("/hitunggaji")
      .send({ employee, komponengaji })
      .then((res) => {
        expect(employee.name).toBe("John");
        expect(employee.nationality).toBe("Indonesia");
        expect(employee.marital_status).toBe("K1");
        expect(gaji_perbulan).toBe(30000000);
        expect(res.statusCode).toEqual(201);
        expect(res.body).toEqual(pajak_bulanini); //expect 3.146.000
      });
  });

  it("should return 201 if success create employee vietnam", async () => {
    const employee = {
      name: "Sam",
      id: "321",
      nationality: "Vietnam",
      marital_status: "K0",
    };

    const komponengaji = [
      {
        name: "Basic Salary",
        amount: 25000000,
      },
      {
        name: "Allowance",
        amount: 5000000,
      },
    ];
    let gaji_perbulan = 0;
    komponengaji.forEach((elem) => {
      gaji_perbulan += elem.amount;
    });

    const pajak_bulanini = {
      pajak_bulanini: "1.779.000",
    };

    await request(app)
      .post("/hitunggaji")
      .send({ employee, komponengaji })
      .then((res) => {
        expect(employee.name).toBe("Sam");
        expect(employee.nationality).toBe("Vietnam");
        expect(employee.marital_status).toBe("K0");
        expect(gaji_perbulan).toBe(30000000);
        expect(res.statusCode).toEqual(201);
        expect(res.body).toEqual(pajak_bulanini); //expect 1.779.000
      });
  });
});
