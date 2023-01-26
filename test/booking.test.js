const request = require("supertest");
const app = require("../app");

describe("POST --> /bookingkamaroperasi/{bookingdate}/{durasi}", () => {
  // positive case
  it("should  return status code 201 if slot 10:00 is available", async () => {
    const bookingdate = new Date("2023-01-30T10:00:00.00Z");
    const durasi = 2;
    const res = await request(app).post(`/bookingkamaroperasi/${bookingdate}/${durasi}`);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual(true);
  });

  it("should  return status code 201 if slot 15:00 is available", async () => {
    const bookingdate = new Date("2023-01-30T15:00:00.00Z");
    const durasi = 2;
    const res = await request(app).post(`/bookingkamaroperasi/${bookingdate}/${durasi}`);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual(true);
  });

  //negative case
  it("should  return status code 400 if slot 18:00 is not available", async () => {
    const bookingdate = new Date("2023-01-30T18:00:00.00Z");
    const durasi = 2;
    const res = await request(app).post(`/bookingkamaroperasi/${bookingdate}/${durasi}`);
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual(false);
  });

  it("should  return status code 400 if slot 07:00 is not available", async () => {
    const bookingdate = new Date("2023-01-30T07:00:00.00Z");
    const durasi = 2;
    const res = await request(app).post(`/bookingkamaroperasi/${bookingdate}/${durasi}`);
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual(false);
  });
});
