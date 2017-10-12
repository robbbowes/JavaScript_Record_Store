var assert = require("assert");
var Record = require("../record");

describe("Record", function() {

  var record;

  beforeEach(function() {
    record = new Record("Radio Futura", "Escuela de Calor", "Pop Español", 10);
  });

  it("Should have a name", function() {
    assert.strictEqual(record.artist, "Radio Futura");
  });

  it("Should have a title", function() {
    assert.strictEqual(record.title, "Escuela de Calor")
  });

  it("Should have a genre", function() {
    assert.strictEqual(record.genre, "Pop Español");
  });

  it("Should have a price", function() {
    assert.strictEqual(record.price, 10)
  });

})
