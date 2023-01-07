import handleName from "./handleName";

describe("handleName", () => {
  it("should throw an error if no name is provided", () => {
    expect(() => handleName("")).toThrowError("Please provide a name");
    expect(() => handleName(" ")).toThrowError("Please provide a name");
  });

  it("should return the name in lowercase", () => {
    expect(handleName("John")).toBe("john");
    expect(handleName("JOHN")).toBe("john");
  });

  it("should return the first name if a full name is provided", () => {
    expect(handleName("John Doe")).toBe("john");
    expect(handleName("JOHN DOE")).toBe("john");
  });

  it("should return the name without spaces", () => {
    expect(handleName("John ")).toBe("john");
  });
});
