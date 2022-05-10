import {app} from "../index.js";
import supertest from "supertest";

app.listen(3000);
const request = supertest(app);

describe("Test example", () => {
  it("gets the test endpoint", async (done) => {
    const response = await request.get("/api/getUsers");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe({});
    done();
  });
  /* it("PUT /update/:id", (done) => {
    request(app);
    request(app)
      .put(`/update/${elementId}`)
      .expect("Content-Type", /json/)
      .send({
        email: "mendes@example.com",
      })
      .expect(200)
      .expect((res) => {
        res.body.data.length = 2;
        res.body.data[0].email = "test@example.com";
        res.body.data[1].id = elementId;
        res.body.data[1].email = "mendes@example.com";
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  }); */
});
