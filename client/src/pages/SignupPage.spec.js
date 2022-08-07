import SignupPage from "./SignupPage.vue";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";

it("has Sign up Header", () => {
  render(SignupPage);
  const header = screen.queryByRole("heading", { name: "Sign up" });
  expect(header).toBeInTheDocument();
});
