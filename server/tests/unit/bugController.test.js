const Bug = require("../../src/models/Bug");
const { createBug } = require("../../src/controllers/bugController");

jest.mock("../../src/models/Bug");

describe("createBug controller", () => {
  it("should call Bug.save()", async () => {
    const req = { body: { title: "Bug 1", description: "test" } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    Bug.mockImplementation(() => ({
      save: jest.fn().mockResolvedValue({ title: "Bug 1" }),
    }));

    await createBug(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ title: "Bug 1" });
  });
});
