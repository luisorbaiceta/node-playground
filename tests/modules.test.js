const { describe, it } = require("node:test");
const assert = require("node:assert");

describe("Given a commonJs script", function () {
  it("Should have behavior A", function () {
    assert.notDeepEqual({ prop: "hey" }, { prop: "ho" });
  });

  it("Should have behavior B", function () {
    assert.deepEqual({ prop: "hey" }, { prop: "hey" });
  });

  it("Should have behavior C", function () {
    assert.deepEqual({ prop: "hey" }, { prop: "hey" });
  });
});
