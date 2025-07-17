const validateBug = require("../../src/utils/validateBug");

describe("validateBug", () => {
  test("should return error for missing title", () => {
    const { isValid, errors } = validateBug({ title: "" });
    expect(isValid).toBe(false);
    expect(errors.title).toBe("Title is required");
  });

  test("should pass for valid data", () => {
    const { isValid, errors } = validateBug({ title: "Bug 1" });
    expect(isValid).toBe(true);
    expect(errors).toEqual({});
  });
});
