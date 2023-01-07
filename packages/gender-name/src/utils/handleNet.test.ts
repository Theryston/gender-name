import handleNet from "./handleNet";
import brazil_100_model from "@gender-name/brazil_100";

describe("handleNet", () => {
  it("should throw an error if no model is provided", () => {
    expect(() => handleNet("")).toThrowError("Please provide a valid model");
    expect(() => handleNet(" ")).toThrowError("Please provide a valid model");
  });

  it("should throw an error if the model is not an object", () => {
    expect(() => handleNet("model")).toThrowError(
      "Please provide a valid model"
    );
    expect(() => handleNet({})).toThrowError("Please provide a valid model");
  });

  it("should return a valid net", () => {
    const net = handleNet(brazil_100_model);

    expect(net).toBeDefined();
  });
});
