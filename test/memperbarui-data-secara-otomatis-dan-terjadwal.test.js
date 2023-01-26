const request = require("supertest");
const app = require("../app");

describe("GET --> /calculateage", () => {
  it("should return correct age in format of date birth 28-10-1983 and current date 03-10-2022", async () => {
    const dateOfBirth = "28-10-1983";
    const requestBody = { currentDate: "2022-10-03" };
    const res = await request(app).get(`/calculateage/${dateOfBirth}`).send(requestBody);
    expect(res.body).toBe("38/11/6");
    expect(res.statusCode).toEqual(200);
  });

  it("should return correct age in format of date birth 28-10-1983 and current date 04-10-2022", async () => {
    let dateOfBirth = "28-10-1983";
    let requestBody = { currentDate: "2022-10-04" };
    let res = await request(app).get(`/calculateage/${dateOfBirth}`).send(requestBody);
    expect(res.body).toBe("38/11/7");
    expect(res.statusCode).toEqual(200);
  });

  it("should return correct age in format of date birth 13-11-1982 and current date 03-10-2022", async () => {
    let dateOfBirth = "13-11-1982";
    let requestBody = { currentDate: "2022-10-03" };
    let res = await request(app).get(`/calculateage/${dateOfBirth}`).send(requestBody);
    expect(res.body).toBe("39/10/20");
    expect(res.statusCode).toEqual(200);
  });

  it("should return correct age in format of date birth 13-11-1982 and new date 04-10-2022 ", async () => {
    let dateOfBirth = "13-11-1982";
    let requestBody = { currentDate: "2022-10-04" };
    let res = await request(app).get(`/calculateage/${dateOfBirth}`).send(requestBody);
    expect(res.body).toBe("39/10/21");
    expect(res.statusCode).toEqual(200);
  });
});
