var assert = require("assert");
var RecordStore = require("../record_store")
var Record = require("../record")

describe("Record Store", function() {

  var recordStore;
  var record;

  beforeEach( function() {
    recordStore = new RecordStore("console.log(records)", "Edinburgh");
    record = new Record("Radio Futura", "Escuela de Calor", "Pop Español", 10);
  });

  it("should have a name", function () {
    assert.strictEqual(recordStore.name, "console.log(records)")
  });

  it("should have a city", function () {
    assert.strictEqual(recordStore.city, "Edinburgh");
  });

  it("should have start with an empty inventory", function () {
    assert.strictEqual(recordStore.inventory.length, 0);
  });

  it("should have start with no money", function () {
    assert.strictEqual(recordStore.balance, 0);
  });

  it("can add a record to store", function () {
    recordStore.addAlbum(record);
    assert.strictEqual(recordStore.inventory.length, 1);
  });

})
