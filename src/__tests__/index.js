const request = require("supertest");
const { app } = require('../server.js');

describe("Server", () => {
  it(`"/" route should return 'Hello World!'`, async () => {
    const response = await request(app).get("/");
    expect(response.status).toEqual(200);
    expect(response.text).toEqual("Hello World!");
  });  
});