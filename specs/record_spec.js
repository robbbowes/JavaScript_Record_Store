var assert = require("assert");
var Record = require("../record");

describe("Record", function() {

  var record;
  var record2;

  beforeEach(function() {
    record = new Record("Radio Futura", "Escuela de Calor", "Pop Español", 10);
    record2 = new Record("Extremoduro", "Iros todos a tomar por culo", "Rock Español", 5);
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

  it("should provide all details", function() {
    assert.strictEqual(record.logRecord(), "Artist: Radio Futura, Title: Escuela de Calor, Genre: Pop Español, Price: 10. Thanks.");
  })

})
