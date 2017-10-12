var assert = require("assert");
var RecordStore = require("../record_store")

describe("Record Store", function() {

  var recordStore;

  beforeEach( function() {
    recordStore = new RecordStore("console.log(records)", "Edinburgh");
  });

  it("should have a name", function () {
    assert.strictEqual(recordStore.name, "console.log(records)")
  })

  it("should have a city", function () {
    assert.strictEqual(recordStore.city, "Edinburgh");
  })

  it("should have start with an empty inventory", function () {
    assert.strictEqual(recordStore.inventory.length, 0);
  })

})
