import { add } from "../../pages/aaa";

it("should return the sum of two numbers", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});
