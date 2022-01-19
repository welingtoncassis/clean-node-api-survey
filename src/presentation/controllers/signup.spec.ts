import { SignUpController } from "./signup";

describe("SignUp Controller", () => {
  test("Should retorn 400 if no name is provided", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: "any_email@email.com",
        password: "any_pass",
        passwordConfirmation: "any_password",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});
