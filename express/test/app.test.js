import {app} from "../index.js";
import supertest from "supertest";
import mongoose from "mongoose";

mongoose.connect('mongodb://rootuser:rootpass@localhost:27017/p2m?authSource=admin')
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error));
const request = supertest(app);

describe("Test example", () => {
  it("gets the test endpoint", async () => {
    const response = await request.get("/api/getUsers");

    expect(response.status).toBe(200);
    //expect(response.body).toBe({});
    //done();
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
