const request = require("supertest");
const app = require("../src/app");

describe("GET /health", () => {
  it("debe responder con el estado del servicio", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: "ok",
      service: "sirbull-banking-core",
      timestamp: expect.any(String),
    });
  });
});
