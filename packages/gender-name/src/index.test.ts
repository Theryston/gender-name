import genderName from "../src/index";
import brazil_100_model from "@gender-name/brazil_100";

describe("index", () => {
  it("should be defined", () => {
    expect(genderName).toBeDefined();
  });

  it("should return a valid result", async () => {
    const result = await genderName("Maria", { model: brazil_100_model });

    expect(result).toBeDefined();
    expect(result).toMatch(/male|female/);
  });
});
